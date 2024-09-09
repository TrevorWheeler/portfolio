import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import FooterSection from '../FooterSection.vue'

describe('FooterSection.vue', () => {
  it('renders the "Thanks" message', () => {
    const wrapper = mount(FooterSection)
    const thanksElement = wrapper.find('#thanks')
    expect(thanksElement.exists()).toBe(true)
    expect(thanksElement.text()).toContain('Thanks for taking the time to check out my portfolio.')
  })

  it('renders the repository link with the correct href', () => {
    const wrapper = mount(FooterSection)
    const repositoryLink = wrapper.find('#repository-link')
    expect(repositoryLink.exists()).toBe(true)
    expect(repositoryLink.attributes('href')).toBe('https://github.com/TrevorWheeler/portfolio')
    expect(repositoryLink.text()).toBe('Source Code')
  })

  it('scrolls to the top when the "Back to top" is clicked', async () => {
    const wrapper = mount(FooterSection)

    // Mock the scrollIntoView method
    const scrollMock = vi.fn()
    Element.prototype.scrollIntoView = scrollMock

    // Mock the getElementById method
    document.getElementById = vi.fn().mockReturnValue({ scrollIntoView: scrollMock })

    const scrollTopElement = wrapper.find('#scroll-top')
    await scrollTopElement.trigger('click')

    expect(scrollMock).toHaveBeenCalledWith({ behavior: 'smooth' })
  })
})
