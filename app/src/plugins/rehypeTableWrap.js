import { h } from 'hastscript'
import { visit } from 'unist-util-visit'

export function rehypeTableWrap() {
  return function (tree) {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName === 'table') {
        const wrapper = h('div', { class: 'table-wrapper' }, [node])
        parent.children[index] = wrapper
      }
    })
  }
}
