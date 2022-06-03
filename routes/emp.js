const router = require("express").Router();

const {
  addNewEmpReg,
  getAllEmp,
  getEmpById,
  updateEmployee,
  deleteEmployee,
} = require("../utils/emp");

//user Registration Route
router.post("/addNewEmpReg", async (req, res) => {
  await addNewEmpReg(req, res);
});

router.get("/getAllEmp", async (req, res) => {
  await getAllEmp(req, res);
});
router.get("/getEmpById/:_id", async (req, res) => {
  await getEmpById(req, res);
});
router.post("/updateEmployee/:_id", async (req, res) => {
  await updateEmployee(req, res);
});
router.post("/deleteEmployee/:_id", async (req, res) => {
  await deleteEmployee(req, res);
});

module.exports = router;
