const pool = require('../db');
const queries = require('../queries/product');

exports.products_get_all = async (req, res, next) => {
	try {
		const getAll = await pool.query(queries.products_get_all);
		return res.status(200).json(getAll.rows);
	} catch (err) {
		return res.status(500).json({
			error: err
		});
	}
};

exports.produtct_create_product = async (req, res, next) => {
	try {
		const productName = req.body.productName;
		const productPrice = req.body.productPrice;
		const productDescription = req.body.productDescription;

		if (
			productName === null ||
			productName === undefined ||
			productName.trim() === ''
		) {
			return res.status(500).json({
				error: 'Product Name field cannot be null or empty',
			});
		}

		if (productPrice === null || productPrice === undefined) {
			return res.status(500).json({
				error: 'Product Price field cannot be null',
			});
		}

		if (
			productDescription === null ||
			productDescription === undefined ||
			productDescription.trim() === ''
		) {
			return res.status(500).json({
				errror: 'Product Description cannot be null or empty',
			});
		}

		const createProduct = await pool.query(
			queries.products_create_product,
			[productName, productPrice, productDescription]
		);

		return res.status(201).json({
			message: 'Product created',
		});
	} catch (err) {
		return res.status(500).json({
			error: err,
		});
	}
};

exports.products_get_product = async (req, res, next) => {
	try {
		const productId = req.params.productId;

		const product = await pool.query(queries.product_get_product, [
			productId,
		]);
		console.log(product[0]);
		if (product[0] !== null && product[0] !== undefined) {
			return res.status(200).json(product.rows[0]);
		} else {
			return res.status(500).json({
				error: 'Product cannot find',
			});
		}
	} catch (err) {
		return res.status(500).json({
			error: err,
		});
	}
};

exports.products_update_product = async (req, res, next) => {
	try {
		const productId = req.params.productId;
		const productName = req.body.productName;
		const productPrice = req.body.productPrice;
		const productDescription = req.body.productDescription;

		if (productId === null || productId === undefined) {
			return res.status(500).json({
				error: 'ProductId cannot be empty or null',
			});
		}
		if (
			productName === null ||
			productName === undefined ||
			productName.trim() === ''
		) {
			return res.status(500).json({
				error: 'Product Name field cannot be empty or null',
			});
		}
		if (productPrice === null || productName === undefined) {
			return res.status(500).json({
				error: 'Product Price field cannot be empty or null',
			});
		}
		if (
			productDescription === null ||
			productDescription === undefined ||
			productDescription.trim() === ''
		) {
			return res.status(500).json({
				error: 'Product Description field cannot be empty or null',
			});
		}

		const updatedProduct = await pool.query(
			queries.products_update_product,
			[productName, productPrice, productDescription, productId]
		);

		return res.status(200).json({
			message: 'Product Updated',
		});
	} catch (err) {
		return res.status(500)({
			error: err,
		});
	}
};

exports.products_delete_product = async (req, res, next) => {
	try {
		const productId = req.params.productId;

		if (productId === null || productId === undefined) {
			return res.status(500).json({
				error: 'Cannot find productId',
			});
		}

		const deletedProduct = await pool.query(
			queries.products_delete_product,
			[productId]
		);

		return res.status(200).json({
			message: 'Product Deleted',
		});
	} catch (err) {
		return res.status(500).json({
			error: err,
		});
	}
};
