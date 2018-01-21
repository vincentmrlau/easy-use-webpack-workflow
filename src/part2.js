/*
* ------------------------------------------
* @description
*
* ------------------------------------------
* @version 1.0.0
* @createdAt
* @author vincent lau/413893093@qq.com
*/

export default function (text, className) {
  let line = document.createElement('p')
  document.body.appendChild(line)
  line.innerHTML = text
  console.log(line.className)
  if (className) line.className = className
}
