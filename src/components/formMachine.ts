import { createMachine } from "xstate"
import validator from "validate.js"

export const formMachine = createMachine(
  {
    id: "doc-received-form",
    type: "parallel",
    context: {},
    states: {
      form: {
        initial: "init",
        states: {
          init: {
            on: {
              submit: [
                {
                  target: "submitted",
                  cond: "isFormValid",
                },
                { target: "invalid" },
              ],
            },
          },
          invalid: {
            on: {
              hide_errors: "init",
            },
          },
          submitted: {},
        },
      },
      date: {
        initial: "valid",
        states: {
          valid: {
            on: {
              input: {
                target: "invalid",
                cond: {
                  type: "isInValid",
                  constraint: {
                    date: {
                      presence: { allowEmpty: false },
                    },
                  },
                },
              },
            },
          },
          invalid: {
            on: {
              input: {
                target: "valid",
                cond: {
                  type: "isValid",
                  constraint: {
                    date: {
                      presence: { allowEmpty: false },
                    },
                  },
                },
              },
            },
          },
        },
      },
      reason: {
        initial: "hidden",
        states: {
          visible: {
            on: {
              input: {
                target: "hidden",
                cond: {
                  type: "isInValid",
                  constraint: {
                    has_documents_received: {
                      inclusion: ["yes"],
                    },
                  },
                },
              },
            },
            initial: "valid",
            states: {
              valid: {
                on: {
                  input: {
                    target: "invalid",
                    cond: {
                      type: "isInValid",
                      constraint: {
                        reason: {
                          presence: { allowEmpty: false },
                        },
                      },
                    },
                  },
                },
              },
              invalid: {
                on: {
                  input: {
                    target: "valid",
                    cond: {
                      type: "isValid",
                      constraint: {
                        reason: {
                          presence: { allowEmpty: false },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          hidden: {
            on: {
              input: {
                target: "visible",
                cond: {
                  type: "isValid",
                  constraint: {
                    has_documents_received: {
                      inclusion: ["yes"],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  {
    guards: {
      isFormValid: () => {
        return false
      },
      isValid: (_, event, { cond }) => {
        const { constraint } = cond as any
        const result = validator(event.formData, constraint)
        return result === undefined
      },
      isInValid: (_, event, { cond }) => {
        const { constraint } = cond as any
        const result = validator(event.formData, constraint)
        return result !== undefined
      },
    },
  }
)
