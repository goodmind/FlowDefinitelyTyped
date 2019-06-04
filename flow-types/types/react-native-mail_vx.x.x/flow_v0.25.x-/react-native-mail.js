declare module "react-native-mail" {
  declare var Mailer: typeof npm$namespace$Mailer;

  declare var npm$namespace$Mailer: {
    mail: typeof Mailer$mail
  };
  declare function Mailer$mail(
    options: {
      subject: string,
      body: string,
      isHTML: boolean,
      recipients?: [string],
      ccRecipients?: [string],
      bccRecipients?: [string],
      attachment?: {
        /**
         * The absolute path of the file from which to read data.
         */
        path: string,

        /**
         * Mime Type: jpg, png, doc, ppt, html, pdf, csv
         */
        type: string,

        /**
         * Optional: Custom filename for attachment
         */
        name?: string
      }
    },
    callback: (error: string, event: string) => void
  ): void;

  declare export default typeof Mailer;
}
