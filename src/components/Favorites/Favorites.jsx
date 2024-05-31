import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromFavorites,
} from "../../features/user/userSlice";

import styles from "../../styles/Cart.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favoriteItems } = useSelector(({ user }) => user);

  const removeItem = (id) => {
    dispatch(removeFromFavorites(id));
  };

  return (
    <section className={styles.cart}>
      <h2 className={styles.title}>Your Favorites</h2>

      {!favoriteItems.length ? (
        <div className={styles.empty}>Here is empty</div>
      ) : (
        <>
          <div className={styles.list}>
            {favoriteItems.map((item) => {
              const { title, category, images, price, id } = item;

              return (
                <div className={styles.item} key={id}>
                  <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${images[0]})` }}
                  />
                  <div className={styles.info}>
                    <h3 className={styles.name}>{title}</h3>
                    <div className={styles.category}>{category.name}</div>
                  </div>

                  <div className={styles.price}>{price}$</div>

                  <div
                    className={styles.close}
                    onClick={() => removeItem(item.id)}
                  >
                    <svg className="icon">
                      <use
                        xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`}
                      />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Favorites;
