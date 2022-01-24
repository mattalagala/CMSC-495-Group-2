const assert = require("assert");
const path = require("path");

function validDescription(s) {
  return typeof s === "string" && s !== "" && s.length < 1000;
}

assert(validDescription("foo"));
assert(!validDescription(""));
assert(!validDescription());
assert(!validDescription(null));
assert(!validDescription({}));

function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("ERROR: Only JPEG, PNG and GIF files types allowed!");
  }
}

// -----------------------------------------------------------------------------
// Public API

module.exports = {
  validDescription: validDescription,
  checkFileType: checkFileType,
};
