import GoogleProvider from "next-auth/providers/google";


 const authOptions = {
providers: [
  GoogleProvider({
    clientId: "237095774204-g69op77li7p7m6ohb86q2oqnh8e2p5sl.apps.googleusercontent.com" ,
    clientSecret:"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"
  })
]
,
secret:"l5ZYbjUsXctsThK6TLh/Mp/nnVBoqoqxG1XP2vqzHvc=" ,
session:{
maxAge:3600

}
}
export default authOptions