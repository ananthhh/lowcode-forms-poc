import { useParams } from "react-router-dom"
import FormViewer, { IForm } from "../components/FormViewer"

const docRecieved: IForm = {
  id: "form-doc-received",
  title: "FUR Case - Review Document Received",
  submit: "Next",
  components: [
    {
      type: "FORM_GROUP",
      id: "group-doc-received-details",
      title: "Details",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_INPUT",
            id: "case-number",
            label: "Case Number",
            attributes: { disabled: true, defaultValue: "FUR40002211" },
          },
        },
      ],
    },
    {
      type: "FORM_GROUP",
      id: "group-core-documents",
      title: "Core Documents",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_RADIO",
            id: "radio-core-documents-fact-find",
            label: "Fact Find",
            attributes: {},
            values: [
              {
                label: "Received",
                value: "yes",
              },
              {
                label: "Not Received",
                value: "no",
              },
            ],
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_RADIO",
            id: "radio-core-documents-case-agreement",
            label: "Case Agreement",
            attributes: {},
            values: [
              {
                label: "Received",
                value: "yes",
              },
              {
                label: "Not Received",
                value: "no",
              },
            ],
          },
        },
      ],
    },
  ],
}

const startCaseReview: IForm = {
  id: "form-start-case-review",
  title: "FUR Case - Start Case Review",
  submit: "Next",
  components: [
    {
      type: "FORM_GROUP",
      id: "group-esp-files",
      title: "ESP Files",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_FILE",
            id: "field-esp-files-uploaded",
            label: "Upload files",
            attributes: {},
          },
        },
      ],
    },
    {
      type: "FORM_GROUP",
      id: "group-details",
      title: "Details",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_INPUT",
            id: "case-number",
            label: "Case Number",
            attributes: { disabled: true, defaultValue: "FUR40002211" },
          },
        },
      ],
    },

    {
      type: "FORM_GROUP",
      id: "group-customer-information-review",
      title: "Customer Information - Review",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_INPUT",
            id: "case-meeting-date",
            label: "Meeting date",
            attributes: { placeholder: "" },
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_INPUT",
            id: "case-advisor",
            label: "Advisor",
            attributes: { placeholder: "Enter advisor name" },
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_BUTTON",
            id: "case-add-advisor",
            label: "Add New Advisor",
            attributes: {},
            modal: {
              type: "FORM_GROUP",
              id: "modal-add-advisor",
              title: "Add new advisor",
              components: [
                {
                  type: "FORM_FIELD",
                  field: {
                    type: "FORM_FIELD_INPUT",
                    id: "advisor-name",
                    label: "Advisor Name",
                    attributes: {},
                  },
                },
              ],
            },
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_RADIO",
            id: "radio-pre-sale-checks",
            label: "Pre sale Checks",
            attributes: {},
            values: [
              {
                label: "Yes",
                value: "yes",
              },
              {
                label: "No",
                value: "no",
              },
            ],
          },
        },
      ],
    },

    {
      type: "FORM_GROUP",
      id: "group-customer-information",
      title: "Customer Information",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_BUTTON",
            id: "add-customer",
            label: "Add Customer",
            attributes: {},
          },
        },
      ],
    },

    {
      type: "FORM_GROUP",
      id: "group-customer-information-dependends",
      title: "Customer Information - Dependants",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_BUTTON",
            id: "add-dependants",
            label: "Add Dependants",
            attributes: {},
          },
        },
      ],
    },

    {
      type: "FORM_GROUP",
      id: "group-customer-information-income",
      title: "Customer Information - Income and Expenses",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_BUTTON",
            id: "add-income",
            label: "Add New Income",
            attributes: {},
          },
        },

        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_BUTTON",
            id: "add-expense",
            label: "Add New Expense",
            attributes: {},
          },
        },
      ],
    },

    {
      type: "FORM_GROUP",
      id: "group-customer-information-asset",
      title: "Customer Information - Assets and Liabilites",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_BUTTON",
            id: "add-asset",
            label: "Add New Asset",
            attributes: {},
          },
        },

        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_BUTTON",
            id: "add-liabilites",
            label: "Add New Liabilites",
            attributes: {},
          },
        },
      ],
    },

    {
      type: "FORM_GROUP",
      id: "group-customer-information-asset",
      title: "Customer Information - Notes",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_TEXTAREA",
            id: "add-notes-on-financials",
            label: "Notes on Financial Circumstances",
            attributes: {},
          },
        },

        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_BUTTON",
            id: "add-liabilites",
            label: "Add New Liabilites",
            attributes: {},
          },
        },
      ],
    },
  ],
}

const investmentReview: IForm = {
  id: "form-start-case-review",
  title: "FUR Case - Investment Review",
  submit: "Next",
  components: [
    {
      type: "FORM_GROUP",
      id: "group-details",
      title: "Details",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_INPUT",
            id: "case-number",
            label: "Case Number",
            attributes: { disabled: true, defaultValue: "FUR40002211" },
          },
        },
      ],
    },

    {
      type: "FORM_GROUP",
      id: "review-questions-investment",
      title: "Review Questions - Investment",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_INPUT",
            id: "client-budget",
            label: "Client Budget",
            attributes: {},
          },
        },
      ],
    },

    {
      type: "FORM_GROUP",
      id: "case-overview",
      title: "Case Overview",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_TEXTAREA",
            id: "case-overview",
            label: "Case Overview",
            attributes: {},
          },
        },
      ],
    },

    {
      type: "FORM_FIELD",
      field: {
        type: "FORM_FIELD_BUTTON",
        id: "review-outcome-button",
        label: "Review Outcomes",
        attributes: {},
      },
    },

    {
      type: "FORM_GROUP",
      id: "review-outcomes",
      title: "Review Outcomes - Ref 1",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_TEXTAREA",
            id: "review-outcome-question",
            label: "Question",
            attributes: { defaultValue: "long question", disabled: true },
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_TEXTAREA",
            id: "review-outcome-saf-output",
            label: "SAF Output",
            attributes: {},
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_BUTTON",
            id: "review-outcome-rc",
            label: "RC",
            attributes: {},
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_SELECT",
            id: "ro-decision",
            label: "Decision",
            attributes: {},
            values: [{ label: "Adequate", value: "adequate" }],
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_SELECT",
            id: "ro-file-quality",
            label: "File Qualtiy",
            attributes: {},
            values: [{ label: "Adequate", value: "adequate" }],
          },
        },
      ],
    },
    {
      type: "FORM_GROUP",
      id: "review-outcomes",
      title: "Review Outcomes - Ref 1.71",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_TEXTAREA",
            id: "review-outcome-question",
            label: "Question",
            attributes: {
              defaultValue: "long question for another ref ",
              disabled: true,
            },
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_TEXTAREA",
            id: "review-outcome-saf-output",
            label: "SAF Output",
            attributes: {},
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_BUTTON",
            id: "review-outcome-rc",
            label: "RC",
            attributes: {},
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_SELECT",
            id: "ro-decision",
            label: "Decision",
            attributes: {},
            values: [{ label: "Adequate", value: "adequate" }],
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_SELECT",
            id: "ro-file-quality",
            label: "File Qualtiy",
            attributes: {},
            values: [{ label: "Adequate", value: "adequate" }],
          },
        },
      ],
    },
  ],
}
const forms = {
  "doc-received": docRecieved,
  "start-case-review": startCaseReview,
  "investment-review": investmentReview,
}

function FormsViewRoute() {
  const { id } = useParams<{
    id: "doc-received" | "start-case-review" | "investment-review"
  }>()
  return <FormViewer {...forms[id ?? "doc-received"]} />
}

export default FormsViewRoute
