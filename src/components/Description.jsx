import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <div>
    {/* <div>Description</div>

      <motion.img 
      width={'15%'}
      src='/img/icon.png'
      alt=''

        //анимация
        animate={{rotate:360}}
        transition={{
          delay:1,
          duration: 5,
          repeat: Infinity,
          repeatDelay: 0.5,
          repeatType:'reverse',
          type:'inertia'
        }}
        />

        <motion.p
        initial={{
          x:-1000,
          opacity:0
        }}

        animate={{
            x: 500,
            opacity: 1
        }}
        transition={{
          delay:1,
          duration: 2,
          type:'tween'
        }}
        >
            Текст который появится 
        </motion.p> */}</div>
        
        <motion.div id='div1'

        initial={{
          x:-1000,
          opacity: 0
        }}

        animate={{
          x:0,
          opacity: 1
        }}
        transition={{
          delay:1,
          duration:2
        }}
        >
          Complete documentation of the Framer Motion animation library. 
          A production-ready motion library for React.</motion.div>

          <motion.div id='div2'
          initial={{
            opacity:0,
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            delay:1,
            duration:2
          }}>
            <motion.img
            src='img/banner-new.jpeg'
            className='banner'
            width={850}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileTap={{rotate:360}}/>

          </motion.div>
          <div id='divImg'>
          <motion.div id='div3'
          initial={{
            opacity:0,
            scale:0.5
          }}
          animate={{
            scale:1,
            opacity:1
          }}
          transition={{
            duration:2
          }}>
            <motion.img
            src='img/ball.jpg'
            className='ball'
            width={200}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileHover={{
              scale:1.5,
              transition:{
                duration:2
              }
            }}/>

          </motion.div>


          <motion.div id='div4'
          initial={{
            opacity:0,
            scale:0.5
          }}
          animate={{
            scale:1,
            opacity:1
          }}
          transition={{
            duration:2
          }}>
            <motion.img drag='x'
            src='img/ball.jpg'
            className='ball'
            width={200}

            initial={{
              opacity:0.6
            }}

            transition={{
              duration:5
            }}

            whileDrag={{
              scale:1.5,
             
            }}/>

          </motion.div>


            

            <motion.button className='btn btn-primary'
            whileHover={{
              scale:1.2
            }}>
            Нажми</motion.button>
      </div>
     
      <div>
        <motion.div id='div6'
            >
              <motion.img
              src='img/el.jpg'
              className='banner2'
              width={500}

              transition={{
                duration:2
              }}
              initial={{
                opacity:0.9
              }}
              whileTap={{rotate:360}}/>

            <motion.div id='div5'

            initial={{
              x:-1000,
              opacity: 0
            }}

            animate={{
              x:0,
              opacity: 1
            }}
            transition={{
              delay:1,
              duration:2
            }}
            >
             Гостиница хорошо видна с главной улицы, подальше от центра города. Эта часть города с хорошо развитой социальной и рекреационной средой. Расположена рядом с престижными многоквартирными и индивидуальными постройками. Это обусловлено наличием тихой и здоровой окружающей средой: близость моря (500м) и Ботанический сад (20м).</motion.div>
            </motion.div>
            <div id='divImg2'>
            <motion.div id='div7'
            initial={{
              opacity:0,
              scale:0.5
            }}
            animate={{
              scale:1,
              opacity:1
            }}
            transition={{
              duration:2
            }}>
              <motion.img
              src='img/c6 (1).jpg'
              

              className='room'
              width={200}
              height={150}

              transition={{
                duration:5
              }}

              whileHover={{
                scale:1.5,
                transition:{
                  duration:2
                }
              }}/>

           
            
            <motion.img
              src='img/c6 (2).jpg'
              

              className='room1'
              width={200}
              height={150}
              

              transition={{
                duration:5
              }}

              whileHover={{
                scale:1.5,
                transition:{
                  duration:2
                }
              }}/>
             <motion.img
              src='img/c6 (3).jpg'
              

              className='room'
              width={200}
              height={150}

              transition={{
                duration:5
              }}

              whileHover={{
                scale:1.5,
                transition:{
                  duration:2
                }
              }}/>  
            <motion.img
              src='img/c6 (4).jpg'
              

              className='room'
              width={200}
              height={150}

              transition={{
                duration:5
              }}

              whileHover={{
                scale:1.5,
                transition:{
                  duration:2
                }
              }}/>
            </motion.div>   
        </div>  
        </div>
    </div>
  )
}

export default Description