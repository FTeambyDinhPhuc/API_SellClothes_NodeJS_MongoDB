const productController = require("../controllers/productController");
const router = require("express").Router();

//ADD SIZE PRODUCT
router.post("/AddSizeProduct", productController.addSizeProduct);
//GET ALL SIZE PRODUCT
router.get("/GetAllSize", productController.getAllSize);
//GET ALL PRODUCT
router.get("/GetAllProduct", productController.getAllProduct);
//GET ALL PRODUCT DETAIL
router.get("/GetAllProductDetail", productController.getAllProductDetail);
//ADD PRODUCT
router.post("/AddProduct", productController.addProduct);
//GET SEX
router.get("/GetAllSex", productController.getAllSex);
//ADD SEX
router.post("/AddSex", productController.addSex);
//GET ALL PRODUCT TYPE
router.get("/GetAllProductType", productController.getAllProductType);
//ADD PRODUCT TYPE
router.post("/AddProductType", productController.addProductType);
//GET ALL PRODUCT BY NameSex
router.get(
  "/GetAllProductBySex/:NameSex",
  productController.getAllProductBySex
);
//GET ALL PRODUCT BY IDSEX
router.get(
  "/GetAllProductByIDSex/:IDSex",
  productController.getAllProductByIDSex
);
//get new prodcut by quality
router.get("/latest/:quality", productController.getProductsByquality);
//GET ALL PRODUCT BY SEX AND PRODUCT TYPE
router.get(
  "/getAllProductBySexAndPType",
  productController.getAllProductBySexAndPType
);
//GET ALL PRODUCT BY IDSEX AND IDPRODUCTTYPE
router.get(
  "/GetAllProByIDSexAndType/:IDSex/:IDProductType",
  productController.getAllProductByIDSexAndIDType
);
//get new prodcut by quality
router.get("/getProductsByName/:name", productController.getProductsByName);
//Add product Details
router.post("/addProductDetails", productController.addProductDetails);
module.exports = router;
