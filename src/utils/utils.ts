/*
 * @Author: zhang
 * @Date: 2022-03-05 23:45:03
 * @LastEditTime: 2022-03-06 18:43:34
 * @LastEditors: zhang
 * @Description: 工具类
 * @FilePath: \vue-backmanage\src\utils\utils.ts
 */

/**
 * @description: test注释
 * @param {string} name
 * @return {void}
 */
export function foo(name: string, age?: number): void {
  const info = `${name}的年龄是${age || 10}。`
  console.log(info)
}
