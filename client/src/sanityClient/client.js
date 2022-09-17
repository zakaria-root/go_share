import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = sanityClient({
  token:
    "skZWPZT2BjxgJNFIFuukM1Xn97l5ekmHOtYBWJptuCWDnOJqoqvnZFUwe9bPzooTNRgqTXb80Sclspu68m4wTFoB5TfOBroUUzNFdRLNPlrt4pkTA5eeB4A61FUdIIThnADsMktNdJ2E944Ft5x96AU3mBP00RxeSjufVtOr4300nUNHJr18",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  projectId: "anz09sb6"
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
