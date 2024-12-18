// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from './Navbar';
// import Footer from './footer';
// import { CartContext } from './CartContext';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './footer';
import { CartContext } from './CartContext'
import Navbar1 from './Navbar1';
//axios
//usestate
//useprops
const products = [
  {
    id: 1,
    category: "Electronic Toys",
    name: "Musical Phone",
    price: "₹489.00 INR",
    image: "https://funblast.in/cdn/shop/files/61NYw0l2uaL._SL1500.jpg?v=1692434363",
    description: 'A colorful musical mobile phone toy with lights, sounds, and interactive buttons, engaging infants in sensory and auditory play.',
  },
  {
    id: 2,
    category: "Electronic Toys",
    name: "Gesture Robot",
    price: "₹1599.00 INR",
    image: "https://rukminim2.flixcart.com/image/750/900/jlzhci80/remote-control-toy/e/f/3/gesture-co-jack-royal-original-imaf8yrszhxghwha.jpeg?q=20&crop=false",
    description: 'A Gesture Sensing Robot interprets human gestures to perform tasks, interaction through intuitive, contactless control.',
  },
  {
    id: 3,
    category: "Electronic Toys",
    name: "Remote Control Car",
    price: "₹599.00 INR",
    image: "https://baybee.co.in/cdn/shop/files/001_a13e8b69-e5e6-473b-b8cd-54be881bb60b.jpg?v=1691218455",
    description: 'A high-speed remote control car toy with responsive controls, durable build, and vibrant design, providing thrilling playtime for kids.',
  },
  {
    id: 4,
    category: "Electronic Toys",
    name: "Smart Watch",
    price: "₹1299.00 INR",
    image: "https://ueeshop.ly200-cdn.com/u_file/UPAW/UPAW306/2210/products/19/8cff47c9b5.png?x-oss-process=image/resize,m_lfit,h_500,w_500",
    description: 'A fun and educational smart watch toy for kids, featuring games, a camera, and fitness tracker, promoting learning, creativity, and active play. Durable and child-friendly.',
  },
  {
    id: 5,
    category: "Electronic Toys",
    name: "Drone",
    price: "₹2999.00 INR",
    image: "https://www.jiomart.com/images/product/original/rvood9jik0/drone-toy-legal-images-orvood9jik0-p595551635-5-202211250859.jpg?im=Resize=(420,420)",
    description: 'An exciting drone toy for kids with easy controls, a built-in camera, and durable design. Perfect for outdoor adventures and fostering curiosity in technology.',
  },
  {
    id: 6,
    category: "Electronic Toys",
    name: "Robot Dog",
    price: "₹1999.00 INR",
    image: "https://funblast.in/cdn/shop/files/61fId-H9SML._SL1187.jpg?v=1692436187",
    description: 'A lifelike robot dog toy with interactive features, voice commands, and playful movements. Perfect for kids seeking a fun, engaging pet.',
  },
  {
    id: 101,
    category: "Fidget Toys",
    name: "Spinner",
    price: "₹149.00 INR",
    image: "https://www.sybazzar.com/public/832-832/files/A4032ED7DC6B926-37a5ae74c946fa1fcc04f975764a6484.jpg",
    description: 'A colorful spinner toy for endless fun, stress relief, and improved focus. Compact, portable, and easy to use.',
  },
  {
    id: 102,
    category: "Fidget Toys",
    name: "Fidget Cube",
    price: "₹199.00 INR",
    image: "https://images.meesho.com/images/products/122722597/sifff_512.webp",
    description: 'A compact fidget cube with various tactile features for stress relief, focus enhancement, and sensory stimulation.',
  },
  {
    id: 103,
    category: "Fidget Toys",
    name: "Stress Ball",
    price: "₹49.00 INR",
    image: "https://images.meesho.com/images/products/272640732/mxmfc_512.jpg",
    description: 'A colorful stress ball toy for kids, perfect for squeezing and fidgeting, relieving stress and anxiety.',
  },
  {
    id: 104,
    category: "Fidget Toys",
    name: "Infinity Cube",
    price: "₹2299.00 INR",
    image: "https://images-cdn.ubuy.co.in/633b4252426ccc220158dfb6-star-cube-vcall-2-in-1-combo-infinity.jpg",
    description: 'A mesmerizing fidget toy with endless flipping fun, perfect for stress relief, focus, and creative play.',
  },
  {
    id: 105,
    category: "Fidget Toys",
    name: "Pop It",
    price: "₹99.00 INR",
    image: "https://media.takealot.com/covers_images/bbb03da0598c4ad49f04b0fb71009a56/s-pdpxl.file",
    description: 'A sensory silicone pop it toy, designed to relieve stress with popping bubbles, available in various shapes and colors.',
  },
  {
    id: 6,
    name: 'Puppet Pop',
    price: '₹199.00',
    image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2023_18/1745429/screen_shot_2021-07-07_at_2-16-30_pm.png',
    description: 'Puppet Pop is an interactive toy that combines puppetry with popping fun, engaging children in imaginative play with surprise elements.',
  },
  {
    id: 106,
    category: "Fidget Toys",
    name: "Tangle Toy",
    price: "₹79.00 INR",
    image: "https://m.media-amazon.com/images/I/61KjeMj3ETL.jpg",
    description: 'The Tangle toy is a twistable, sensory fidget toy designed to promote focus and relaxation through tactile stimulation and creativity.',
  },
  {
    id: 201,
    category: "Plush Toys",
    name: "Cuddly Bear",
    price: "₹499.00 INR",
    image: "https://m.media-amazon.com/images/I/91oxSXgVD6L.jpg",
    description: 'A soft and cuddly bear toy perfect for comforting children, with a huggable design that promotes warmth and companionship.',
  },
  {
    id: 202,
    category: "Plush Toys",
    name: "Soft Bunny",
    price: "₹399.00 INR",
    image: "https://m.media-amazon.com/images/I/51v7OEYlWZL._AC_UF1000,1000_QL80_.jpg",
    description: 'A cuddly and gentle bunny toy, perfect for comforting hugs with its soft fur and adorable design, ideal for young children.',
  },
  {
    id: 203,
    category: "Plush Toys",
    name: "Teddy Bear",
    price: "₹299.00 INR",
    image: "https://assets.ajio.com/medias/sys_master/root/20230629/u8r9/649d17c5eebac147fc3af7bf/-1117Wx1400H-465845109-brown-MODEL.jpg",
    description: 'Cuddly teddy bear toy with soft fur, friendly face, and huggable size, perfect for comforting children and sparking imaginative play.',
  },
  {
    id: 204,
    category: "Plush Toys",
    name: "Stuffed Elephant",
    price: "₹599.00 INR",
    image: "https://images-cdn.ubuy.co.in/64012a013813f845053390d3-kinrex-elephant-stuffed-animals.jpg",
    description: 'Soft, cuddly stuffed elephant toy for children, made from hypoallergenic materials, perfect for comforting and imaginative playtime adventures.',
  },
  {
    id: 205,
    category: "Plush Toys",
    name: "Penguin Plush",
    price: "₹249.00 INR",
    image: "https://m.media-amazon.com/images/I/61A2ddWFQxL._AC_UF1000,1000_QL80_.jpg",
    description: 'Adorable penguin plush toy with soft, huggable fur, perfect for cuddling and imaginative play, ideal for all ages.',
  },
  {
    id: 206,
    category: "Plush Toys",
    name: "Fluffy Kitten",
    price: "₹399.00 INR",
    image: "https://images-cdn.ubuy.co.in/63b632ddd92a0a420247459b-cute-kitten-plush-toy-throw-pillow.jpg",
    description: 'A cuddly plush kitten toy, irresistibly soft with lifelike features, perfect for comforting play and cozy companionship for children.',
  },
  {
    id: 301,
    category: "Educational Toys",
    name: "Building Blocks Set",
    price: "₹699.00 INR",
    image: "https://5.imimg.com/data5/SELLER/Default/2022/10/WV/VB/RI/21279949/building-blocks-educational-toys-100-pcs-500x500.jpg",
    description: 'A versatile building block set for endless creativity, featuring various shapes and colors, fostering imagination and fine motor skills.',
  },
  {
    id: 302,
    category: "Educational Toys",
    name: "Science Kit",
    price: "₹799.00 INR",
    image: "https://i.ebayimg.com/images/g/tPcAAOSwenNjPU~L/s-l1200.jpg",
    description: 'Explore, learn, and experiment with a science kit toy. Includes tools and instructions for hands-on scientific discovery and educational fun.',
  },
  {
    id: 303,
    category: "Educational Toys",
    name: "Math Puzzle",
    price: "₹499.00 INR",
    image: "https://images-cdn.ubuy.co.in/634d112f6ece5c6ce95bd126-sankuu-wooden-puzzles-counting-toys.jpg",
    description: 'A math puzzle toy stimulating critical thinking with puzzles and challenges, promoting problem-solving skills in a playful and engaging manner.',
  },
  {
    id: 304,
    category: "Educational Toys",
    name: "Solar System Model",
    price: "₹999.00 INR",
    image: "https://m.media-amazon.com/images/I/71VNrBHrCKL._AC_UF894,1000_QL80_.jpg",
    description: 'Explore the solar system with this detailed model toy, perfect for learning planetary positions, sizes, and characteristics through interactive play.',
  },
  {
    id: 305,
    category: "Educational Toys",
    name: "Alphabet Blocks",
    price: "₹399.00 INR",
    image: "https://images-cdn.ubuy.co.in/66762732334745364a36cc63-skoolzy-wooden-alphabet-blocks-26-abc.jpg",
    description: 'Classic alphabet blocks toy for toddlers, promoting early literacy and creativity through colorful letters, numbers, and simple puzzles. Educational and safe.',
  },
  {
    id: 306,
    category: "Educational Toys",
    name: "Learning Tablet",
    price: "₹1199.00 INR",
    image: "https://m.media-amazon.com/images/I/715vkDW3E4L.jpg",
    description: 'An interactive learning tablet for kids, packed with educational games, quizzes, and activities to enhance learning and cognitive development.',
  },
  {
    id: 401,
    category: "Outdoor Toys",
    name: "Swing Set",
    price: "₹4299.00 INR",
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/outdoor-toy/s/b/d/1-kids-slide-and-swing-set-with-basketball-hoop-indoor-outdoor-original-imagnw4xgukfgtwz.jpeg?q=90&crop=false",
    description: 'A sturdy swing set for outdoor fun, built with safety in mind, offering joy and exercise for children in any backyard.',
  },
  {
    id: 402,
    category: "Outdoor Toys",
    name: "Basketball Hoop",
    price: "₹899.00 INR",
    image: "https://www.jiomart.com/images/product/original/rvvg6p85cj/buyab-factory-basket-ball-for-kids-toys-for-boys-and-girls-kids-basketball-portable-set-with-hanging-board-ring-net-ball-indoor-and-outdoor-games-product-images-orvvg6p85cj-p595939527-1-202212012152.jpg?im=Resize=(420,420)",
    description: 'Interactive basketball hoop toy for kids, designed for indoor and outdoor play, encouraging active fun and developing motor skills.',
  },
  {
    id: 403,
    category: "Outdoor Toys",
    name: "Water Slide",
    price: "₹8499.00 INR",
    image: "https://s.yimg.com/ny/api/res/1.2/mul.yYppgNFQcUOb4Pi5Rw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ2MQ--/https://media.zenfs.com/en/purewow_185/e8daa371777d060a9a84bb846a8a2861",
    description: 'Exciting inflatable water slide toy for backyard fun, featuring splash pool, easy setup, and safe design for thrilling summer adventures.',
  },
  {
    id: 404,
    category: "Outdoor Toys",
    name: "Soccer Ball",
    price: "₹299.00 INR",
    image: "https://i5.walmartimages.com/seo/FRCOLOR-5-Pcs-Inflatable-Soccer-Balls-Kids-Football-Toys-Party-Favors-Supplies-Decorations-Set-9-Inch-Random-Color_de27b392-0e0d-4aa8-a38f-5fbf5bc17559.dfff5385d148da4731e3c25e66788a2d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    description: 'A classic soccer ball toy for outdoor fun, promoting physical activity and sportsmanship with durable construction for lasting play.',
  },
  {
    id: 405,
    category: "Outdoor Toys",
    name: "Frisbee",
    price: "₹149.00 INR",
    image: "https://images-cdn.ubuy.com.sa/633b6eb5d8f7d5229d2b57d2-b-toys-by-battat-flying-disc-set-4.jpg",
    description: 'A classic Frisbee toy for outdoor fun, designed for easy throwing and catching, ideal for parks, beaches, and backyard play.',
  },
  {
    id: 406,
    category: "Outdoor Toys",
    name: "Bicycle",
    price: "₹4499.00 INR",
    image: "https://image.made-in-china.com/202f0j00MmDWHenFQUqZ/Bicycle-Toys-Cycling-Bike-for-Kids-by-Cycles-Bicicletas-PARA-Nios-Baratas-Bebes-Children-Model-Bike-Bicycle-Kids-Cycle-for-Boy.jpg",
    description: 'A colorful and sturdy bicycle toy for toddlers, designed for safe and enjoyable indoor or outdoor play, fostering balance and coordination skills.',
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', product });
    alert('Product added to cart!');
  };

  return (
    <>
      <Navbar1 />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={product.image} alt={product.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1>{product.name}</h1>
            <h6>{product.category}</h6>
            <h4>{product.price}</h4>
            <p>{product.description}</p>
            <button className="btn btn-primary" onClick={addToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
