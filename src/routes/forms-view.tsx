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
  ],
}

const forms = {
  "doc-received": docRecieved,
  "start-case-review": startCaseReview,
}

function FormsViewRoute() {
  const { id } = useParams<{ id: "doc-received" | "start-case-review" }>()
  return <FormViewer {...forms[id ?? "doc-received"]} />
}

export default FormsViewRoute
