import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import HeaderSection from '../HeaderSection.vue'
import IconEmail from '../icons/IconEmail.vue'
import IconGithub from '../icons/IconGithub.vue'
import IconLinkedIn from '../icons/IconLinkedIn.vue'

// Mock the router
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', component: { template: '<div>Home</div>' } }]
})

describe('HeaderSection', () => {
  it('renders both mobile and desktop menus', () => {
    const wrapper = mount(HeaderSection, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.find('.menu-mobile').exists()).toBe(true)
    expect(wrapper.find('.menu-desktop').exists()).toBe(true)
  })

  it('renders correct number of links in mobile menu', () => {
    const wrapper = mount(HeaderSection, {
      global: {
        plugins: [router]
      }
    })

    const mobileLinks = wrapper.findAll('.menu-mobile a')
    expect(mobileLinks.length).toBe(3)
  })

  it('renders correct number of links in desktop menu', () => {
    const wrapper = mount(HeaderSection, {
      global: {
        plugins: [router]
      }
    })

    const desktopLinks = wrapper.findAll('.menu-desktop .links a')
    expect(desktopLinks.length).toBe(3)
  })

  it('renders correct link URLs and labels', () => {
    const wrapper = mount(HeaderSection, {
      global: {
        plugins: [router]
      }
    })

    const desktopLinks = wrapper.findAll('.menu-desktop .links a')

    expect(desktopLinks[0].attributes('href')).toBe('https://github.com/trevorwheeler')
    expect(desktopLinks[0].text()).toBe('Github')

    expect(desktopLinks[1].attributes('href')).toBe('mailto:sendtrevmail@gmail.com')
    expect(desktopLinks[1].text()).toBe('Contact')

    expect(desktopLinks[2].attributes('href')).toBe(
      'https://www.linkedin.com/in/trevor-wheeler-95a46659/'
    )
    expect(desktopLinks[2].text()).toBe('LinkedIn')
  })

  it('renders correct icons in mobile menu', () => {
    const wrapper = mount(HeaderSection, {
      global: {
        plugins: [router]
      }
    })

    const mobileLinks = wrapper.findAll('.menu-mobile a')

    expect(mobileLinks[0].findComponent(IconGithub).exists()).toBe(true)
    expect(mobileLinks[1].findComponent(IconEmail).exists()).toBe(true)
    expect(mobileLinks[2].findComponent(IconLinkedIn).exists()).toBe(true)
  })

  it('renders router-link correctly', async () => {
    const wrapper = mount(HeaderSection, {
      global: {
        plugins: [router]
      }
    })

    const nameLink = wrapper.find('.name')
    expect(nameLink.text()).toBe('Trevor Wheeler')

    await nameLink.trigger('click')
    expect(router.currentRoute.value.path).toBe('/')
  })
})
