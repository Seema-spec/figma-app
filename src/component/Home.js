import React from 'react';
import styles from './Home.module.scss';
import call from '../assets/Vector-4.png';
import head from '../assets/Vector-5.png';
import banner1 from '../assets/image 1.png';
import image2 from '../assets/image 2.png';
import image3 from '../assets/image 3.png';
import image4 from '../assets/image 4.png';
import image5 from '../assets/image 5.png';
import image6 from '../assets/image 6.png';
import Line from '../assets/Line 8.png';
import Group from '../assets/Group 32.png';
import banner2 from '../assets/banner1.png';
import banner3 from '../assets/banner2.png';
import vector6 from '../assets/Vector6.png';
import vector7 from '../assets/Vector7.png';
import group5 from '../assets/Group 243.png';
import group24 from '../assets/Group 68.png';
import group25 from '../assets/Group 69.png';
import group26 from '../assets/Group 72.png';
import  
{head_img,
category,
category1,
trending,
NewProduct,
Product,
group} from './common'

function Home() {
    return (
        <div className={styles.home}>
            <div className={styles.top_header}>
                <h3>Welcome to Our Store Hiscraves</h3>
                <div className={styles.header_right}>
                <img src={call} alt='' />
                <h4>Call Us: 1234567890</h4>
                </div>
                
            </div>
            <header className={styles.home_header}>
                <img src={head} alt='' />
                <div style={{marginLeft:"117px"}}>Logo Here</div>
                <div className={styles.header_img}>
                    {head_img?.map((data, index) => 
                    <img key={index} src={data?.img} alt=''></img>
                    )}
                </div>
            </header>
            <img className={styles.banner} src={banner1} alt=''/>
                <div className={styles.inner_home}>
                    <div className={styles.inner_card}>
                        {category?.map((data)=>
                        <div className={styles.card}>
                        <img src={data?.img}/>
                        </div>
                        )} 
                    </div>
                    <div className={styles.wrapper_cards}>
                        <div className={styles.wrapper}>
                        <img src={image2}/>
                        <img src={image3}/>
                        </div>
                        <div className={styles.wrapper2}>
                            <img src={image4}/>
                            <img src={image6}/>
                            <img src={image5}/>
                        </div>
                    </div>
                    {trending?.map((trend,index1) => (
                    <div key={trend.title}>
                        <div className={styles.category_title}>
                            <img src={Line} alt='' />
                            <h1>{trend.title}</h1>
                            <img src={Line} alt='' />
                        </div>
                        <div className={styles.card_block}>
                            <div className={styles.item_card}>
                                {trend.items.map((data, index) => (
                                    <div key={index} className={styles.item}>
                                        <img className={`${
                                        index1 === 0 && (index === 0 || index === 7)
                                            ? styles.item_img
                                            : ''
                                        }`}
                                        src={data.img}
                                        alt=''
                                        />
                                        { index1 === 0 && (index === 0 || index === 7)
                                            ? <div className={styles.header_right}>
                                            <img className={styles.item_cart_img} src={group24} />
                                            <img className={styles.item_cart_img} src={group25} />
                                            <img className={styles.item_cart_img} src={group26} />
                                            </div>
                                            : ''}
                                        <div className={styles.card_text}>
                                            <p>{data?.text1}</p>
                                            <p>{data?.text2}</p>
                                            <p>{data?.price}</p>
                                            <img src={Group} alt='' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className={styles.button}>VIEW ALL</button>
                        </div>
                    </div>
                    ))}
                </div>
            <img className={styles.banner} src={banner2} alt='' />
                <div className={styles.inner_home}>
                {NewProduct?.map((trend) => (
                    <div key={trend.title}>
                        <div className={styles.category_title}>
                            <img src={Line} alt='' />
                            <h1>{trend.title}</h1>
                            <img src={Line} alt='' />
                        </div>
                        <div className={styles.card_block}>
                            <div className={styles.item_card}>
                                {trend?.items.map((data, index) => (
                                    <div key={index} className={styles.item}>
                                        <img src={data?.img} alt='' />
                                        <div className={styles.card_text}>
                                            <p>{data?.text1}</p>
                                            <p>{data?.text2}</p>
                                            <p>{data?.price}</p>
                                            <img src={Group} alt='' />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className={styles.button}>VIEW ALL</button>
                        </div>
                    </div>
                    ))}
                <br/>
                <div className={styles.card_block}>
                        <div className={styles.item_card}>
                            {Product.map((data)=>
                            <div className={styles.product_item}>
                                <img src={data.img} alt=''/>
                                <img src={data.img1} alt=''/>
                             </div>
                            )}  
                        </div> 
                </div>
            </div>
            <img className={styles.banner} src={banner3} alt='' />
             <div className={styles.inner_home}>
                <div>
                    <div className={styles.card_block}>
                        <div className={styles.item_card}>
                            {category1.map((data,index)=>
                            <div className = {index === 0 ? styles.item2 : styles.item3}>
                                <div className={styles.card_text2}>
                                <img src={data?.img} alt=''/>
                                <p>Hurry Up!</p>
                                <h1>85% OFF</h1>
                                <p>Sale</p>
                                <button>SHOP NOW</button>
                                </div>
                             </div>
                            )}  
                        </div>  
                    </div>
                </div>
            </div>
            <div className={styles.ecllips}></div> 
            <div className={styles.group_card}>
               {group?.map((data)=>
               <div className={styles.group_icon}>
               <img src={data?.img}/>
               </div>
               )}
            </div> 
            <div className={styles.ecllips1}></div> 
            <div className={styles.card_block}>
            <div className={styles.bottom_card}>
                <img src={vector6}/>
                <img style={{float:"left"}} src={vector7}/>
                <div className={styles.bottom_card_text}>
                    <h1>Subscribe to get updates on exciting offers & deals</h1>
                    <div >
                    <input
                        type='text'
                        placeholder="Enter your email"
                    />
                    <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <img src={group5}/>
            </div>
        </div>
    );
}

export default Home;
