import React from "react";

const Learning = () => {
  return (
    <>
      <div id="learningFirstSection" className="container-fluid">
        <div className="row parent">
          <div className="col-md-3 categories">
            <ul>
              <li>Catergories</li>
              <li>Deserts</li>
              <li>Main Courses</li>
              <li>Salads</li>
              <li>Snacks</li>
              <li>Side Dishes</li>
              <li>Pizza</li>
              <li>Soup and Stews</li>
              <li>Pancakes and Toppings</li>
            </ul>
          </div>
          <div className="col-md-8">
            <div className="row form_row">
              <div className="col-md-6">
                <form>
                  <input
                    type="text"
                    placeholder="What would you like to learn today?"
                  />
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <h1>Learners are currently viewing</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 image_div">
                <img
                  src={require("../../assets/images/img5.png")}
                  alt=""
                  className="food_image"
                />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
              <div className="col-md-3 image_div">
                <img
                  src={require("../../assets/images/img5.png")}
                  alt=""
                  className="food_image"
                />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
              <div className="col-md-3  image_div">
                <img
                  src={require("../../assets/images/img5.png")}
                  alt=""
                  className="food_image"
                />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
            </div>

            <div className="row pupolar_classes">
              <div className="col-md-5">
                <h1>Popular Classes</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 image_div">
                <img
                  src={require("../../assets/images/img5.png")}
                  alt=""
                  className="food_image"
                />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
              <div className="col-md-3 image_div">
                <img
                  src={require("../../assets/images/img5.png")}
                  alt=""
                  className="food_image"
                />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
              <div className="col-md-3  image_div">
                <img
                  src={require("../../assets/images/img5.png")}
                  alt=""
                  className="food_image"
                />
                <div>
                  <span>300 students</span>
                  <span>1hr 40min</span>
                </div>
                <p>
                  Serve your breakfast like a boss <br /> and have a diet on
                </p>
                <p>Chef Manchang Wuyeng</p>
                <p className="rating">
                  <img src={require("../../assets/images/img8.png")} alt="" />
                  <span> 4.5 </span>
                </p>
              </div>
            </div>
            <div className="row recomended">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12 recommended_categories">
                    <h1>What to Learn Next?</h1>
                    <h4>Recommended Categories for you</h4>
                  </div>
                </div>
                <div className="row learn_next">
                  <div className="col-md-3">
                    <h5>Deserts</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>Side Dishes</h5>
                  </div>
                  <div className="col-md-3">
                    <h5>Soups and Stews</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learning;
