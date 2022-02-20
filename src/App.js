import React from 'react'
import './App.css'
import { BiLibrary, BiMovie } from 'react-icons/bi'
import { FaRegUser, FaMusic } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='library'>
              <BiLibrary className='nav-icons'/>
              <span className='link-text'>Cats</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='music'>
              <FaMusic className='nav-icons' />
              <span className='link-text'>Cats</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='movie'>
              <BiMovie className='nav-icons' />
              <span className='link-text'>Cats</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='user'>
              <FaRegUser className='nav-icons' />
              <span className='link-text'>Cats</span>
            </a>
          </li>
        </ul>
      </nav>

      <main>
        <h1>Tech bubble Is Bursting...</h1>
        <p>
          Quis minim deserunt consectetur dolor ex magna quis eu commodo aliqua fugiat. Aliquip qui aliquip consequat quis tempor commodo in non. Velit cupidatat tempor pariatur quis aute nostrud incididunt mollit voluptate deserunt aliqua. In eu aute proident pariatur incididunt sunt labore ea minim officia id dolor elit.

          Occaecat nisi ex incididunt minim dolor deserunt enim aliqua esse incididunt. Dolore ullamco consectetur elit dolor excepteur Lorem laborum ea aliquip. Duis quis cupidatat eiusmod nisi veniam dolor id sunt ullamco non sint enim ut. Mollit veniam aute consequat cupidatat veniam et occaecat deserunt qui excepteur laborum ea. Laboris amet ex qui excepteur aliquip eiusmod exercitation. Laboris fugiat quis culpa nulla voluptate ad minim esse voluptate magna veniam laboris.

          Ipsum mollit anim deserunt exercitation. Lorem dolore adipisicing ut Lorem dolore. Deserunt proident commodo Lorem aute mollit aute anim magna reprehenderit.

          Nostrud eiusmod reprehenderit elit proident nisi duis irure. Adipisicing est amet reprehenderit dolore fugiat commodo reprehenderit mollit veniam reprehenderit deserunt qui excepteur. Lorem aliqua duis proident sint culpa deserunt non non minim eiusmod. Pariatur cupidatat velit anim est aliquip anim. Aliquip officia commodo laboris excepteur commodo aliqua est qui ipsum esse sunt. Id sit commodo qui nulla consequat tempor sunt nulla Lorem.
        </p>
      </main>
    </div>
  )
}

export default App;
