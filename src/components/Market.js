import React from "react";
import "../stylesheets/Market.css";
import { useContext, useEffect, useState } from "react";
import userContext from "./userContext";
import PEELApi from "../api";
import Loader from "./Loader";
import SearchForm from "./SearchForm";

const INITIAL_FORM_STATE = {
  name: '',
  description: '',
  website: '',
  image: ''
};

function Market() {
  const { currUser } = useContext(userContext);
  const [items, setItems] = useState({
    data: [],
    isLoading: true
  });
  const [adding, setAdding] = useState(false);
  const [newItem, setNewItem] = useState({
    ...INITIAL_FORM_STATE
  });

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems(query = '_') {
    try {
      const result = await PEELApi.getAllProducts(query);
      setItems({
        data: result,
        isLoading: false
      });
    } catch (err) {
      alert(err);
    }
  }

  function startAdd() {
    setAdding(true);
  }

  async function handleAdd(evt) {
    evt.preventDefault();
    try {
      await PEELApi.createProduct(newItem);
    } catch (errs) {
      alert(errs);
    }
    setAdding(false);
    setNewItem({
      ...INITIAL_FORM_STATE
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setNewItem((prevItem) => ({
      ...prevItem,
      [name]: value
    }));
  }

  if (items.isLoading) return <Loader />;

  return (
    <div className="results">
      <div className="overlap">
        <div className="search-module">
          <div className="search-components">
            <div className="search-box">
              <div className="search-icon">
                <img className="img" alt="Search icon" src="search-icon.svg" />
              </div>
              <SearchForm search={fetchItems} />
            </div>
            {/* {currUser.data.isAdmin && ( */}
              <button className="button">
                <div className="text-wrapper" onClick={startAdd}>
                  Add
                </div>
              </button>
            {/* )} */}
          </div>
          {adding && (
            <div className="adding-form">
              <form onSubmit={handleAdd}>
                <input
                  type="text"
                  name="name"
                  placeholder="Item Name"
                  value={newItem.name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="website"
                  placeholder="Website"
                  value={newItem.website}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="image"
                  placeholder="Image URL"
                  value={newItem.image}
                  onChange={handleChange}
                />
                <textarea
                  name="description"
                  placeholder="Description"
                  value={newItem.description}
                  onChange={handleChange}
                ></textarea>
                <button type="submit">Add Item</button>
              </form>
            </div>
          )}
        </div>
        <div className="div-2">
          <div className="featured">
            <div className="overlap-group">
              <img className="featured-image" alt="Featured" src="featured-image.png" />
              <div className="text-wrapper-2">Brown Dog Farm</div>
              <div className="text-wrapper-4">@browndogfarm</div>
            </div>
          </div>
          <div className="articles">
            {items.data.map((item) => (
              <div key={item.id}>
                <div className="product-listing">
                  <img alt="" src={item.image} />
                  {item.name}
                  <p>
                    {item.description}
                  </p>

                </div>
              </div>
            ))}
          </div>
          <footer className="footer">
            <div className="overlap-3">
              <div className="link">
                {/* Footer content */}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Market;
