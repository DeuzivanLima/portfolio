'use client'

import { Bar } from "../Bar"
import { Banner } from "../Banner"
import { Layout } from "../Layout"
import { NavigationBar } from "../NavigationBar"
import { Project } from "../Project"
import { motion } from "framer-motion"

import styles from "./index.module.scss"

const real_projects = [
    {
        title: 'Fhê Soares',
        description: 'Landing page to demonstrate him projects as a photographer and expose him work to the most distant audiences.',
        src_list: ['/projects/fehsoares_001.png', '/projects/fehsoares_002.png', '/projects/fehsoares_003.png', '/projects/fehsoares_004.png'],
        href: "#"
    },
    {
        title: 'Anuncia Comigo',
        description: 'A simple page based on an example proposed by the client. Simple Landing Page.',
        src_list: ['/projects/anunciacomigo_001.png', '/projects/anunciacomigo_002.png', '/projects/anunciacomigo_003.png'],
        href: "#"
    }
]

const personal_projects = [
    {
        title: 'Sandbox - Lazy Edition',
        description: 'A simple sandbox simulator made in Python to practice my math skills. The project is based on a generic sandbox.',
        src_list: ['/projects/sandbox_001.jpeg', '/projects/sandbox_002.jpeg', '/projects/sandbox_003.jpeg'],
        href: "https://github.com/DeuzivanLima/Lazy-Sandbox"
    },
    {
        title: 'Flipper Ino - Firmware',
        description: 'Flipper Ino is a project inspired by Flipper Zero, aiming to provide pentest features, hardware hacking, and more. The project is currently being improved, but the basic menu is complete.',
        src_list: ['/projects/flipper-ino-001.jpg', '/projects/flipper-ino-002.jpg', '/projects/flipper-ino-003.jpg'],
        href: "https://github.com/xoksync/Flipper-Ino-A03"
    },
    {
        title: 'Fazueli Wallet',
        description: 'An attempt to simulate the processes of a digital wallet, using a database and various security mechanisms. This project was created to understand some banking concepts.',
        src_list: ['/projects/fazueli-wallet-001.png', '/projects/fazueli-wallet-002.png', '/projects/fazueli-wallet-003.png', '/projects/fazueli-wallet-004.png', '/projects/fazueli-wallet-005.png', '/projects/fazueli-wallet-006.png'],
        href: "#"
    },
    {
        title: 'NooBank (For Noob?)',
        description: 'An interface designed to be implemented in my application to simulate basic banking processes and other simple functionalities.',
        src_list: ['/projects/noobank_001.png', '/projects/noobank_002.png'],
        href: "#"
    },
    {
        title: 'Basic Blog UI (Responsive)',
        description: 'A project I started when I was learning complex concepts, aimed at understanding various processes.',
        src_list: ['/projects/blog_001.png', '/projects/blog_002.png', '/projects/blog_003.png', '/projects/blog_004.png', '/projects/blog_005.png'],
        href: "#"
    },
    {
        title: 'Platform Game v1',
        description: 'A platform game with random world generation and other important concepts for a good mathematical understanding of physics and related topics.',
        src_list: ['/projects/platform_001.png', '/projects/platform_002.png', '/projects/platform_003.png'],
        href: "#"
    },
    {
        title: 'Platform Game v2',
        description: 'Another version of a platform game, but with more complexity, including random world generation, structure generation, and ore generation with rarity and depth mechanisms.',
        src_list: ['/projects/platform2_001.png', '/projects/platform2_002.png', '/projects/platform2_003.png', '/projects/platform2_004.png'],
        href: "#"
    },
    {
        title: 'Rocket Simulation (I Think XD)',
        description: 'Applying the concepts of universal gravitation and particle generation, this project aims to develop my skills in gravity and rocket orbiting concepts.',
        src_list: ['/projects/rocket_001.png', '/projects/rocket_002.png'],
        href: "#"
    },
    {
        title: 'Particle System 0.0.1',
        description: 'A simple project that applied interesting mathematical concepts.',
        src_list: ['/projects/particle_001.png', '/projects/particle_002.png', '/projects/particle_003.png'],
        href: "#"
    },
    {
        title: 'Tile Loader',
        description: 'A program that loads a tileset in an unusual way that I came up with. I am not sure if this application exists, but it is a relatively basic yet complex concept.',
        src_list: ['/projects/tileload_001.png', '/projects/tileload_002.png', '/projects/tileload_003.png', '/projects/tileload_004.png'],
        href: "#"
    }
]

export const App = () => {
    return (
        <Layout>
            <NavigationBar/>
            <div className='m-auto'>
                <Banner/>
                
                <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1.5}} transition={{duration: 1}} className='text-3xl text-white p-4 uppercase text-center'><strong>SKILLS</strong></motion.h1>
                <motion.p initial={{opacity: 0}} whileInView={{opacity: 1.5}} transition={{duration: 2}} className='text-xs text-center text-neutral-600 p-4 pt-0'><strong>WARNING</strong>: Bars are for conceptual visualization of my ability</motion.p>
              
                <div className={`max-w-[1500px] m-auto ${styles.bar_grid}`}>
                    <Bar title={'Web Development (JavaScript, Next.JS, Prisma...)'} progress={56}/>
                    <Bar title={'C/C++ (SDL2, SFML, ImGUI, SQLite3...)'} progress={72}/>
                    <Bar title={'SQLite3, Postgres...'} progress={44}/>
                    <Bar title={'Python 3.X (Pygame...)'} progress={52}/>
                </div>

                <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1.5}} transition={{duration: 1}} className='text-3xl uppercase text-white p-4 text-center'><strong>Real Projects</strong></motion.h1>
                <div className={styles.basic_grid}>
                    {
                        real_projects.map((val, index) => {
                            return (
                                <Project
                                    title={val.title}
                                    description={val.description}
                                    src_list={val.src_list}
                                    href={val.href}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
                
                <motion.h1 initial={{opacity: 0}} whileInView={{opacity: 1.5}} transition={{duration: 1}} className="text-3xl uppercase text-white p-4 text-center"><strong>Personal Projects</strong></motion.h1>
                <div className={styles.basic_grid}>
                    {
                        personal_projects.map((val, index) => {
                            return (
                                <Project
                                    title={val.title}
                                    description={val.description}
                                    src_list={val.src_list}
                                    href={val.href}
                                    key={index}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <footer className="bg-neutral-950">
                <span className="block text-neutral-700 text-xs text-center p-6">© 2024 Deuzivan Lima</span>
            </footer>
        </Layout>
    )
}