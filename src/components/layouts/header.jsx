import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom'
import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import Login from '../views/login'

export default class extends Component {

    handleSearch = async (event) => {
        // event.preventDefault();
        try {

        }
        catch (e) {
            console.log(e);
        }
    };

    render() {
        return <header className="bg-primary">
            <Navbar light expand="md">
                <NavbarBrand tag={Link} to='/' >LOGO Car parts Catalogue international</NavbarBrand>
                <Nav className="ml-auto" left navbar>
                    <InputGroup className="mr-5">
                        <Input className="rounded" placeholder="Searching for part?"/>
                        <InputGroupAddon addonType="prepend">
                            <Button className="bg-warning text-dark mb-1 rounded"
                            onClick={this.handleSearch}
                            >
                                Search
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                    <UncontrolledDropdown nav inNavbar>
                        {this.props.user.isLoggedIn
                            ? <Fragment>
                                <DropdownToggle className="bg-warning text-dark rounded" nav caret>
                                    {this.props.user.username}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {this.props.user.role === 'Admin'
                                        ?<Fragment>
                                            <DropdownItem tag={Link} to="/add">
                                                Add product
                                            </DropdownItem>
                                            {/*<DropdownItem tag={Link} to="/orders">*/}
                                                {/*My Orders*/}
                                            {/*</DropdownItem>*/}
                                        </Fragment>
                                        :<Fragment>
                                            <DropdownItem tag={Link} to="/orders">
                                                My Orders
                                            </DropdownItem>
                                        </Fragment>
                                    }
                                    <DropdownItem divider/>
                                    <DropdownItem href='/'>
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </Fragment>
                            : <Fragment>
                                <DropdownToggle className="bg-warning text-dark rounded" nav caret>
                                    Log In
                                </DropdownToggle>
                                <DropdownMenu>
                                    <Login
                                        // user={this.props.user}
                                        // loggIn={this.props.loggIn}
                                        // setUserEmail={this.props.setUserEmail}
                                        // setUserPassword={this.props.setUserPassword}
                                        // setUsername={this.props.setUsername}
                                        // setToken={this.props.setToken}
                                        // setRole={this.props.setRole}
                                    />
                                    <DropdownItem divider/>
                                    <DropdownItem tag={Link} to="/register">
                                        Register
                                    </DropdownItem>
                                </DropdownMenu>
                            </Fragment>
                        }
                    </UncontrolledDropdown>
                </Nav>
            </Navbar>
        </header>
    }
}
