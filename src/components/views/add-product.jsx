import React, {Fragment, Component} from 'react';
import ProductService from '../../services/product-service'
import {Button} from 'reactstrap';
import connect from "react-redux/es/connect/connect";

class AddProduct extends Component {
    static service = new ProductService();

    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const {productName, manufacturer, description, imageLink, retailPrice, wholesalePrice} = this.props.newProduct;
            const payload = {productName, manufacturer, description, imageLink, retailPrice, wholesalePrice};
            const result = await AddProduct.service.create(payload);
            console.log(result);

            this.props.setUsername(result.user.username);
            this.props.setToken(result.token);
            this.props.loggIn(result.success);
        } catch (e) {
            console.log(e);
        }
    };

    handleChange = ({target}) => {
        console.log(target.value)
        switch (target.name) {
            case 'productName': this.props.setProductName(target.value); break;
            case 'manufacturer': this.props.setProductManufacturer(target.value); break;
            case 'description': this.props.setProductDescription(target.value); break;
            case 'imageUrl': this.props.setProductImageLink(target.value); break;
            case 'retailPrice': this.props.setProductWholeSalePrice(target.value); break;
            case 'wholesalePrice': this.props.setProductRetailPrite(target.value); break;
            default: console.log('switch error');
        }
    };

    render(){
        const {productName, manufacturer, description, imageLink, retailPrice, wholesalePrice} = this.props.newProduct;
        return (
            <Fragment>
                <div className="form-wrapper">
                    <h1>Add new product:</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="text">Name:</label>
                            <br/>
                            <input
                                type="text"
                                name="productName"
                                id="productName"
                                placeholder="Enter name"
                                value={productName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Manufacturer:</label>
                            <br/>
                            <input
                                type="text"
                                name="manufacturer"
                                id="manufacturer"
                                placeholder="Enter manufacturer"
                                value={manufacturer}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Description:</label>
                            <br/>
                            <input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Enter description"
                                value={description}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">Image link:</label>
                            <br/>
                            <input
                                type="url"
                                name="imageUrl"
                                id="imageUrl"
                                placeholder="Enter image link"
                                value={imageLink}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Retail price:</label>
                            <br/>
                            <input
                                type="number"
                                name="retailPrice"
                                id="retailPrice"
                                placeholder="Enter price"
                                value={retailPrice}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Wholesale price:</label>
                            <br/>
                            <input
                                type="number"
                                name="wholesalePrice"
                                id="wholesalePrice"
                                placeholder="Enter price"
                                value={wholesalePrice}
                                onChange={this.handleChange}
                            />
                        </div>
                        <Button
                            className="bg-warning text-dark rounded mr-5 ml-5"
                            type="submit">Add
                        </Button>
                    </form>
                </div>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        newProduct: state.newProductReducer,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setProductName: (name) => {
            dispatch({
                type: "SETPRODUCTNAME",
                payload: name
            })
        },
        setProductManufacturer: (brand) => {
            dispatch({
                type: "SETMANUFACTURER",
                payload: brand
            })
        },
        setProductDescription: (descr) => {
            dispatch({
                type: "SETDESCTIPRTION",
                payload: descr
            })
        },
        setProductImageLink: (link) => {
            dispatch({
                type: "SETIMAGELINK",
                payload: link
            })
        },
        setProductWholeSalePrice: (wsprice) => {
            dispatch({
                type: "SETWHOLESALEPRICE",
                payload: wsprice
            })
        },
        setProductRetailPrite: (rprice) => {
            dispatch({
                type: "SETRETAILPRICE",
                payload: rprice
            })
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);

