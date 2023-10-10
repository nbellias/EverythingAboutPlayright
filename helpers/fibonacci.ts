export default function fibonacci(index: number): number {
    if (index <= 1) {
        return index;
    }

    return fibonacci(index - 1) + fibonacci(index - 2);
}