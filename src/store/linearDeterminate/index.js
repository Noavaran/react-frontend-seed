export const
    START_LINEAR = 'APP/LINEAR/DETERMINATE/START',
    END_LINEAR = 'APP/LINEAR/DETERMINATE/END';

export const startLinear = () => {
    return {
        type: START_LINEAR
    }
};

export const endLinear = () => {
    return {
        type: END_LINEAR
    }
};