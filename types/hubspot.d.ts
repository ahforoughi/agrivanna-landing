interface HubSpotFormsAPI {
  forms: {
    create: (config: {
      region: string
      portalId: string
      formId: string
      target: HTMLElement | string
      onFormReady?: () => void
      onFormSubmit?: () => void
      onFormSubmitted?: () => void
      submitButtonClass?: string
      cssClass?: string
      css?: string
      inlineMessage?: string
      cssRequired?: string
      cssBorder?: string
      errorClass?: string
      errorMessageClass?: string
      groupErrors?: boolean
      onBeforeFormInit?: () => void
      onFormDestroyed?: () => void
    }) => void
    loaded: () => boolean
  }
}

declare global {
  interface Window {
    hbspt: HubSpotFormsAPI
  }
}

export {}

