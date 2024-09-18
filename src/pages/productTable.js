import React from 'react';
import{useNavigate} from 'react-router-dom';
import './ProductTable.css';
import { FaEdit,FaTrash,FaDownload} from 'react-icons/fa';
import Footer from '../components/Footer';



const products = [
  {
    id: 1,
    name: 'Nike Air Force 1 \'07 LV8',
    category: 'Shoes',
    stock: 220,
    price: '$122.27',
    image: 'https://static.nike.com/a/images/t_default/9fa009a1-7b18-47a7-8e17-2c83bb52dd61/AIR+FORCE+1+%2707+LV8.png',
  },
  {
    id: 2,
    name: 'Nike Sportswear Heritage86 Futura Washed',
    category: 'Caps',
    stock: 999,
    price: '$15.95',
    image: 'https://cdn11.bigcommerce.com/s-9edujkl7t4/images/stencil/1280x1280/products/13292/39363/Nike-Sportswear-Heritage86-Futura-Washed-Cap-in-Black-White__21677.1648596912.jpg?c=1',
  },
  {
    id: 3,
    name: 'Nike Air Max Penny',
    category: 'Shoes',
    stock: 75,
    price: '$182.50',
    image: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/85894722-258f-4c76-afde-8a573f1c99de/air-max-penny-black-and-metallic-silver-dn2487-002-release-date.jpg',
  },

  {
    id: 4,
    name: 'Nike Windrunner D.Y.E',
    category: 'Jacket',
    stock: 30,
    price: '$102.43',
    image: 'https://1565619539.rsc.cdn77.org/temp/1666371286_1f2334d9634019e802618fc1fc315524.jpg',
  },
  {
    id: 5,
    name: 'Nike Storm-FIT x Stüssy',
    category: 'Jacket',
    stock: 50,
    price: '$9.54',
    image: 'https://static.nike.com.cn/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1e253c5b-967b-4e5a-8c8a-4e6432cea052/storm-fit-10-st%C3%BCssy-%E7%94%B7-%E5%A5%B3%E5%A4%B9%E5%85%8B-pSd6gB.png',
  },
  {
    id: 6,
    name: 'Nike Everyday Plus Cushioned',
    category: 'Socks',
    stock: 999,
    price: '$14.67',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWOpdT5v4lglKGq0INRw7LfRFoK2z6DjaB8g&s',
  },
  {
    id: 7,
    name: 'NikeCourt Dri-FIT Advantage',
    category: 'T-Shirt',
    stock: 220,
    price: '$39.65',
    image: 'https://static.nike.com/a/images/t_default/3e68811d-042c-4f8c-b0d2-83457d7ae643/AS+M+NKCT+DF+ADVTG+TOP.png',
  },
  {
    id: 8,
    name: 'Nike Everyday Lightweight',
    category: 'Socks',
    stock: 999,
    price: '$122.27',
    image: 'https://tennishub.in/media/catalog/product//image/101935d7df/nike-everyday-lightweight-crew-socks-white-set-of-3-pairs.jpg',
  },
  {
    id: 9,
    name: 'Nike Dri-FIT Academy',
    category: 'T-Shirt',
    stock: 220,
    price: '$23.64',
    image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/269ae8b3-e203-4832-8a5c-d540672565d3/M+NK+DF+ACD23+TOP+SS+BR.png',
  },
];



const ProductTable = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate('/add-product');
  };

  const handleEditProduct = (id) => {
    navigate(`/edit-product/${id}`);
  };


  return (
    <div className="product-page">
      <div className="breadcrumb">
        Dashboard / Products
      </div>
      <div className="small-heading">
        <h4>Products</h4>
      </div>
      <div className="product-table-container">
        <div className="product-table-header">
          <input type="text" placeholder="Search in products" className="search-bar" />
          <div className="controls">
            <button className="add-product-btn" onClick={handleAddProduct}>+ Add Product</button>
            <button className="import-csv-btn"><FaDownload/>Import CSV</button>
          </div>
        </div>
        <table className="product-table">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td className="product-info">
                  <img src={product.image} alt={product.name} className="product-image" />
                  {product.name}
                </td>
                <td>{product.category}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEditProduct(product.id)}><FaEdit /></button>
                  <button className="delete-btn"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default ProductTable;