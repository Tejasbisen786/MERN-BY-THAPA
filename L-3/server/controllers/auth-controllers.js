// Basically controllers responsible for handling the
// application Logic
// Proccess the incoming request
// MVC Design Pattern

// Home Page Logic

const home = async (req, res) => {
  try {
    res.status(200).send(" This is Controller Home Page");
  } catch (error) {
    res.status(400).send({ msg: "Page Not Found" });
  }
};

// Register Page

const register = async (req, res) => {
  try {
    res.status(200).send(" This is Controller Register Page");
  } catch (error) {
    console.log(error);
  }
};

module.exports ={ home, register}
