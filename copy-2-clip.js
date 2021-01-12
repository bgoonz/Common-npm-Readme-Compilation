
function copyToClipboard( text ) {
  const elem = document.querySelector( 'bash' );
  elem.value = text;
  document.body.appendChild( elem );
  elem.select();
  document.execCommand( 'copy' );
  document.body.removeChild( elem );
}
