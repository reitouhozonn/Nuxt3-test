export const useCounter = () => {
    const count = useState('count', () => 0)

    const increment = () => count.value++

    const decrement = () => count.value--

    return {
        count: readonly(count),
        increment,
        decrement
    }
}

// export default useCounter



// Vue3 Composition API ではカスタムフックを慣例的に composables ディレクトリ配下に配置しますが Nuxt3 では composables ディレクトリは特別な意味を持っています。

// composables ディレクトリ配下で名前付エクスポートまたはデフォルトエクスポートした関数は コンポーネント内で import せずに使うことができます。
