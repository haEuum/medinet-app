// 의료 (내과)
export interface INTERNAL_MEDICINE {
    EMERGENCY_MEDICINE: string; // 응급의학과
    CRITICAL_CARE_MEDICINE: string; // 중환자의학과
    CARDIOLOGY: string; // 심장내과
    NEPHROLOGY: string; // 신장내과
    PULMONOLOGY: string; // 호흡기내과
    NEUROLOGY: string; // 신경과
    INFECTIOUS_DISEASES: string; // 감염내과
    PEDIATRICS: string; // 소아청소년과
    GERIATRIC_MEDICINE: string; // 노인병내과
    ALLERGY_IMMUNOLOGY: string; // 알레르기내과
    EMERGENCY_NURSING: string; // 응급 간호
    ICU_NURSING: string; // 중환자실 간호
    ER_NURSING: string; // 응급실 간호
}

// 의료 (외과)
export interface SURGERY {
    TRAUMA_SURGERY: string; // 외상외과
    NEUROSURGERY: string; // 신경외과
    ORTHOPEDIC_SURGERY: string; // 정형외과
    THORACIC_SURGERY: string; // 흉부외과
    VASCULAR_SURGERY: string; // 혈관외과 (정맥외과)
    PLASTIC_SURGERY: string; // 성형외과
    GENERAL_SURGERY: string; // 일반외과
    OTORHINOLARYNGOLOGY: string; // 이비인후과
    OPHTHALMOLOGY: string; // 안과
    BURN_SURGERY: string; // 화상외과
    ORAL_MAXILLOFACIAL_SURGERY: string; // 구강악안면외과
    UROLOGY: string; // 비뇨의학과
    TRAUMA_NURSING: string; // 외상전문의 간호
}

// 소방 행정, 지휘
export interface FIRE_ADMINISTRATION_COMMAND {
    FIRE_COMMANDER: string; // 소방 지휘관
    FIREFIGHTER: string; // 소방관
    FIRE_HELICOPTER_PILOT: string; // 소방 헬기 조종사
    FIRE_DISPATCH_CENTER: string; // 119 상황실
    EMERGENCY_TRANSPORT_COORDINATOR: string; // 응급이송 코디네이터
}

// 소방 구조
export interface FIRE_RESCUE {
    FIRE_RESCUE_TEAM: string; // 소방 구조대
    WATER_RESCUE_TEAM: string; // 수난 구조대
    HIGHWAY_RESCUE_TEAM: string; // 고속도로 구조대
    FIRE_RESCUE_UNIT: string; // 화재 구조대
    SPECIAL_RESCUE_TEAM: string; // 특수 구조대
}

// 일반 구조
export interface GENERAL_RESCUE {
    POLICE_SWAT_RESCUE: string; // 경찰 특공대 구조
    DISASTER_RESPONSE_UNIT: string; // 재난 대응 특수부대
    MOUNTAIN_RESCUE_TEAM: string; // 산악 구조대
    COAST_GUARD_RESCUE_TEAM: string; // 해양경찰 구조대
    MILITARY_RESCUE_TEAM: string; // 군 구조대
}

// 응급 구조, 이송
export interface EMERGENCY_TRANSPORT {
    EMS_UNIT: string; // 119 구급대
    EMERGENCY_MEDIC_TECH1: string; // 응급구조 1급
    EMERGENCY_MEDIC_TECH2: string; // 응급구조 2급
    HOSPITAL_EMERGENCY_MEDIC: string; // 병원 응급구조
}

// 모든 분야를 하나로 묶은 타입
export const FieldCategory = {
    INTERNAL_MEDICINE: {
        EMERGENCY_MEDICINE: "응급의학과",
        CRITICAL_CARE_MEDICINE: "중환자의학과",
        CARDIOLOGY: "심장내과",
        NEPHROLOGY: "신장내과",
        PULMONOLOGY: "호흡기내과",
        NEUROLOGY: "신경과",
        INFECTIOUS_DISEASES: "감염내과",
        PEDIATRICS: "소아청소년과",
        GERIATRIC_MEDICINE: "노인병내과",
        ALLERGY_IMMUNOLOGY: "알레르기내과",
        EMERGENCY_NURSING: "응급 간호",
        ICU_NURSING: "중환자실 간호",
        ER_NURSING: "응급실 간호",
    },
    SURGERY: {
        TRAUMA_SURGERY: "외상외과",
        NEUROSURGERY: "신경외과",
        ORTHOPEDIC_SURGERY: "정형외과",
        THORACIC_SURGERY: "흉부외과",
        VASCULAR_SURGERY: "혈관외과",
        PLASTIC_SURGERY: "성형외과",
        GENERAL_SURGERY: "일반외과",
        OTORHINOLARYNGOLOGY: "이비인후과",
        OPHTHALMOLOGY: "안과",
        BURN_SURGERY: "화상외과",
        ORAL_MAXILLOFACIAL_SURGERY: "구강악안면외과",
        UROLOGY: "비뇨의학과",
        TRAUMA_NURSING: "외상전문의 간호",
    },
    FIRE_ADMINISTRATION_COMMAND: {
        FIRE_COMMANDER: "소방 지휘관",
        FIREFIGHTER: "소방관",
        FIRE_HELICOPTER_PILOT: "소방 헬기 조종사",
        FIRE_DISPATCH_CENTER: "119 상황실",
        EMERGENCY_TRANSPORT_COORDINATOR: "응급이송 코디네이터",
    },
    FIRE_RESCUE: {
        FIRE_RESCUE_TEAM: "소방 구조대",
        WATER_RESCUE_TEAM: "수난 구조대",
        HIGHWAY_RESCUE_TEAM: "고속도로 구조대",
        FIRE_RESCUE_UNIT: "화재 구조대",
        SPECIAL_RESCUE_TEAM: "특수 구조대",
    },
    GENERAL_RESCUE: {
        POLICE_SWAT_RESCUE: "경찰 특공대 구조",
        DISASTER_RESPONSE_UNIT: "재난 대응 특수부대",
        MOUNTAIN_RESCUE_TEAM: "산악 구조대",
        COAST_GUARD_RESCUE_TEAM: "해양경찰 구조대",
        MILITARY_RESCUE_TEAM: "군 구조대",
    },
    EMERGENCY_TRANSPORT: {
        EMS_UNIT: "119 구급대",
        EMERGENCY_MEDIC_TECH1: "응급구조 1급",
        EMERGENCY_MEDIC_TECH2: "응급구조 2급",
        HOSPITAL_EMERGENCY_MEDIC: "병원 응급구조",
    },
} as const;

export type field = keyof typeof FieldCategory;
export type userClass<M extends field> = keyof typeof FieldCategory[M];
