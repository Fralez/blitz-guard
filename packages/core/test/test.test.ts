/* eslint-disable require-await */
import { GuardInit } from "@blitz-guard/core"
import { IGuard } from "guard"

let Guard: IGuard<any>

describe("Guard.test", () => {
  beforeEach(() => {
    Guard = GuardInit<any>(async () => {})
  })

  it("throws error on empty ctx", () => {
    //@ts-expect-error
    Guard.test(undefined, undefined, "create", "comment").catch((e) => {
      expect(e.message).toBe("GUARD: ctx cannot be empty")
    })
  })
  it("throws error on empty ability", () => {
    //@ts-expect-error
    Guard.test({}, undefined, undefined, "comment").catch((e) => {
      expect(e.message).toBe("GUARD: ability cannot be empty")
    })
  })
  it("throws error on empty resource", () => {
    //@ts-expect-error
    Guard.test({}, undefined, "foo", undefined).catch((e) => {
      expect(e.message).toBe("GUARD: resource cannot be empty")
    })
  })

  it("returns true if no rules", async () => {
    expect.assertions(2)
    expect(Guard.rules.length).toBe(0)
    const result = await Guard.test({}, null, "create", "comment")
    expect(result).toBe(true)
  })
  it("last rule of the same ability-resource is applied", async () => {
    expect.assertions(2)
    Guard.cannot("create", "comment")
    Guard.can("create", "comment")

    const result = await Guard.test({}, null, "create", "comment")
    expect(result).toBe(true)

    Guard.cannot("create", "comment")
    const result2 = await Guard.test({}, null, "create", "comment")
    expect(result2).toBe(false)
  })

  describe("resource == 'all'", () => {
    it("applies to any resource", async () => {
      Guard.cannot("create", "all")
      const result = await Guard.test({}, null, "create", "foo")
      expect(result).toBe(false)
    })
  })

  describe("ability == 'manage'", () => {
    it("applies to any ability", async () => {
      Guard.cannot("manage", "comment")
      const result = await Guard.test({}, null, "bar", "comment")
      expect(result).toBe(false)
    })
  })

  describe("rule with a guard", () => {
    let testArgs = { foo: "bar" }

    it("args are passed to the guard ", () => {
      expect.assertions(2)
      Guard.cannot("manage", "comment", async (args) => {
        expect(args).toStrictEqual(testArgs)
        expect(args.foo).toStrictEqual("bar")
        return true
      })
      return Guard.test({}, testArgs, "bar", "comment")
    })

    describe("guard returning true", () => {
      beforeEach(() => {
        Guard.cannot("manage", "comment", async () => Promise.resolve(true))
      })
      it("rule is applied", async () => {
        const result = await Guard.test({}, null, "bar", "comment")
        expect(result).toBe(false)
      })
    })

    describe("guard returning false", () => {
      beforeEach(() => {
        Guard.cannot("manage", "comment", async () => Promise.resolve(false))
      })
      it("rule is not applied", async () => {
        const result = await Guard.test({}, null, "bar", "comment")
        expect(result).toBe(true)
      })
    })
  })

  describe("performance", () => {
    let testGuard1: any
    let testGuard2: any

    beforeEach(() => {
      testGuard1 = jest.fn(async () => Promise.resolve(true))
      testGuard2 = jest.fn(async () => Promise.resolve(true))
    })
    it("rules of a different ability-resource dont get executed", async () => {
      expect.assertions(2)
      Guard.cannot("create", "article", testGuard1)
      Guard.cannot("create", "comment", testGuard2)

      await Guard.test({}, null, "create", "comment")

      expect(testGuard1).toBeCalledTimes(0)
      expect(testGuard2).toBeCalledTimes(1)
    })

    it("only last rule of same ability-resource gets called", async () => {
      expect.assertions(2)
      Guard.cannot("create", "comment", testGuard1)
      Guard.can("create", "comment", testGuard2)

      await Guard.test({}, null, "create", "comment")

      expect(testGuard1).toBeCalledTimes(0)
      expect(testGuard2).toBeCalledTimes(1)
    })

    it("first guard false then next rule is called", async () => {
      testGuard2 = jest.fn(async () => Promise.resolve(false))
      expect.assertions(2)

      Guard.cannot("create", "comment", testGuard1)
      Guard.can("create", "comment", testGuard2)

      await Guard.test({}, null, "create", "comment")

      expect(testGuard1).toBeCalledTimes(1)
      expect(testGuard2).toBeCalledTimes(1)
    })
  })
})
