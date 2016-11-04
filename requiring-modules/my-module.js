function nameLogger(name) {
  return name;
}

module.exports = {
  nameLoggerFunction : function () {
    console.log("The guy's name is " + nameLogger("Josh") + ".");
  }
}