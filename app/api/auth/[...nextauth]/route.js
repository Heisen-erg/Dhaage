import NextAuth from "next-auth"


import GoogleProvider from "next-auth/providers/google";


 const authOptions = {
providers: [
  GoogleProvider({
    clientId: "237095774204-g69op77li7p7m6ohb86q2oqnh8e2p5sl.apps.googleusercontent.com" ,
    clientSecret:"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"
  })
]
,
session:{
maxAge:3600

}
}







const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}