// VirtualDOM 생성
// 자식 노드를 평탄화
export function createVNode(type, props, ...children) {
  return {
    type,
    props,
    children: children.flat(Infinity).filter((child) => child !== false && child !== null && child !== undefined),
  };
}
