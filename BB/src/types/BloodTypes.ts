

export type BloodTypes = 'A+'| 'A-'| 'B+'|'B-'|'O+'|'O-'|'AB+'|'AB-'

export type BloodTypeCounts = {
    [type in BloodTypes]: number;
};

export const canReceiveFrom = (type:BloodTypes):BloodTypes[] =>{
    const conversion = {
        'A+' : ['O+','A-','O-','A+'] as BloodTypes[],
        'A-' : ['O-','A-'] as BloodTypes[],
        'B+' : ['O+','B+','O-','B-'] as BloodTypes[],
        'B-' : ['O-','B-'] as BloodTypes[],
        'O+' : ['O+','O-'] as BloodTypes[],
        'O-' : ['O-']as BloodTypes[],
        'AB+' : ['O+','A+','B+','AB+','O-','A-','B-','AB-'] as BloodTypes[],
        'AB-' : ['O-','A-','B-','AB-']as BloodTypes[] ,
    }
    return conversion[type]
}
