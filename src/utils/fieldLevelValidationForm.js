const required = value => (value ? undefined : 'مقدار نمی تواند خالی باشد.');

const email = value => (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? undefined : 'پست الکترونیک اشتباه است.');

export {
    required, email
}