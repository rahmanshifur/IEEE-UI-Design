

export const shortText = (text, len = 20) => {
   if (text !== null && text?.length >= len) {
      let result = text.substring(0, len)
      if (text.length > len) {
         result += '...'
      }
      return result
   }
   return text
}


