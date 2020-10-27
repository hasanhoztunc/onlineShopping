exports.products_get_all = 'SELECT * FROM products;';

exports.products_create_product =
	'INSERT INTO products(product_name, product_price, product_description) VALUES ($1, $2, $3)';

exports.product_get_product =
	'SELECT product_id, product_name, product_price, product_description FROM products WHERE product_id = $1';

exports.products_update_product =
	'UPDATE products SET product_name = $1, product_price = $2, product_description = $3 WHERE product_id = $4';

exports.products_delete_product = 'DELETE FROM products WHERE product_id = $1';
