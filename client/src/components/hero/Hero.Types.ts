

export type HeroProps = {
    title?: string,
    subTitle?: string,
    primaryAction: {
        label: string,
        to: string
    },
    secondaryAction: {
        label: string,
        to: string
    }
}