import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import Vountdown from '../src'

describe('props', () => {
  describe('tag', () => {
    it('should be `span` by default', () => {
      const wrapper = mount(Vountdown)

      expect(wrapper.props('tag')).toBe('span')
      expect(wrapper.vm.$el.tagName.toLowerCase()).toBe('span')
    })

    it('should be `div` by default', () => {
      const wrapper = mount(Vountdown, {
        props: {
          tag: 'div',
        },
      })

      expect(wrapper.props('tag')).toBe('div')
      expect(wrapper.vm.$el.tagName.toLowerCase()).toBe('div')
    })
  })

  describe('auto', () => {
    it('should be `true` by default', () => {
      const wrapper = mount(Vountdown)

      expect(wrapper.props('auto')).toBe(true)
      expect(wrapper.vm.auto).toBe(true)
    })

    it('should be `false` by default', () => {
      const wrapper = mount(Vountdown, {
        props: {
          auto: false,
        },
      })

      expect(wrapper.props('auto')).toBe(false)
      expect(wrapper.vm.auto).toBe(false)
    })
  })

  describe('time', () => {
    it('should be `5s` by default', () => {
      const wrapper = mount(Vountdown)

      expect(wrapper.props('time')).toBe(5000)
    })

    it('should be `10s` by default', () => {
      const wrapper = mount(Vountdown, {
        props: {
          time: 10000,
        },
      })

      expect(wrapper.props('time')).toBe(10000)
    })
  })
})
