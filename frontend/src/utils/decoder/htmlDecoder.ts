const decodeHtml = (html: any) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

export default decodeHtml;
