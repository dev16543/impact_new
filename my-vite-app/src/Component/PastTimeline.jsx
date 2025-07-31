import React, { useState, useEffect } from 'react';
import july2425 from '/src/assets/pastevents/timeline_24-25/July.jpg';
import august2425 from '/src/assets/pastevents/timeline_24-25/Aug.jpg';
import september2425 from '/src/assets/pastevents/timeline_24-25/Sept.jpg';
import october2425 from '/src/assets/pastevents/timeline_24-25/Oct.jpg';
import november2425 from '/src/assets/pastevents/timeline_24-25/Nov.jpg';
import december2425 from '/src/assets/pastevents/timeline_24-25/Dec.jpg';
import january2425 from '/src/assets/pastevents/timeline_24-25/Jan.jpg';
import february2425 from '/src/assets/pastevents/timeline_24-25/Feb.png';
import march2425 from '/src/assets/pastevents/timeline_24-25/Marc.webp';


export default function CompanyTimeline() {
  const [selectedMonth, setSelectedMonth] = useState('May');
  const [selectedYear, setSelectedYear] = useState('2024-25');

  // Available academic years
  const academicYears = ['2022-23', '2023-24', '2024-25', '2025-26'];
  const currentYearIndex = academicYears.indexOf(selectedYear);

  // Sample milestone data - organized by academic year and month
  const timelineData = {
    '2022-23': {
      'May': [
        {
          id: 1,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop',
          title: 'National Youth Celebration 2023',
          details: [
            { text: 'National Youth Celebration', pdfUrl: 'https://www.example.com/youth-celebration-2023.pdf' },
            { text: 'Dance Rally', pdfUrl: 'https://www.example.com/dance-rally-2023.pdf' },
            { text: 'Interactive Session with Hostel Representatives', pdfUrl: 'https://www.example.com/hostel-session-2023.pdf' },
            { text: '22nd JNU Inter University Youth Festival', pdfUrl: 'https://www.example.com/jnu-festival-2023.pdf' },
            { text: 'Conference 2023', pdfUrl: 'https://www.example.com/conference-2023.pdf' }
          ]
        }
      ],
      'Jun': [
        {
          id: 2,
          month: 'Jun',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=300&h=300&fit=crop',
          title: 'Summer Festival 2023',
          details: [
            { text: 'Music Concert', pdfUrl: 'https://www.example.com/music-concert-2023.pdf' },
            { text: 'Art Exhibition', pdfUrl: 'https://www.example.com/art-exhibition-2023.pdf' },
            { text: 'Food Festival', pdfUrl: 'https://www.example.com/food-festival-2023.pdf' },
            { text: 'Community Gathering', pdfUrl: 'https://www.example.com/community-gathering-2023.pdf' }
          ]
        }
      ]
    },
    '2023-24': {
      'May': [
        {
          id: 3,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
          title: 'Sports Day 2024',
          details: [
            { text: 'Athletic Events', pdfUrl: 'https://www.example.com/athletic-events-2024.pdf' },
            { text: 'Team Sports', pdfUrl: 'https://www.example.com/team-sports-2024.pdf' },
            { text: 'Individual Competitions', pdfUrl: 'https://www.example.com/individual-competitions-2024.pdf' },
            { text: 'Prize Distribution', pdfUrl: 'https://www.example.com/prize-distribution-2024.pdf' },
            { text: 'Closing Ceremony', pdfUrl: 'https://www.example.com/closing-ceremony-2024.pdf' }
          ]
        }
      ],
      'Jan': [
        {
          id: 4,
          month: 'Jan',
          image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=300&h=300&fit=crop',
          title: 'New Year Celebration 2024',
          details: [
            { text: 'Cultural Program', pdfUrl: 'https://www.example.com/cultural-program-2024.pdf' },
            { text: 'Student Awards', pdfUrl: 'https://www.example.com/student-awards-2024.pdf' },
            { text: 'Annual Meeting', pdfUrl: 'https://www.example.com/annual-meeting-2024.pdf' },
            { text: 'Networking Session', pdfUrl: 'https://www.example.com/networking-session-2024.pdf' }
          ]
        }
      ]
    },
    '2024-25': {
  "Jul": [
    {
      "id": 1,
      "month": "July",
      "image": july2425,
      "title": "Monthly Events",
      "details": [
        { "text": "Orientation of Alumini 2024-25", "pdfUrl": "https://docs.google.com/presentation/d/1wqJNp3K1uwBAAH0C4Dbo-QScdeuQ-RBHYzPsc_7PWvI/edit?usp=drivesdk" },
        { "text": "Inauguration - Green Campus Initeative", "pdfUrl": "https://docs.google.com/presentation/d/10hogqRbhXa1JKU2yYUD-Xnn2PMpYiMMJctELJ3tk5LU/edit?usp=drivesdk" },
        { "text": "Nasha Mukti Abhiyan - Bhira Village", "pdfUrl": "https://docs.google.com/presentation/d/1WRlFxDQXtFmVOmCq6CSG8poNO0WOMzcnBkVGFcWEZHE/edit?usp=drivesdk" },
        { "text": "World Youth Skills Day Celebration", "pdfUrl": "https://docs.google.com/presentation/d/18m3D0tyaoW6awT7Hyb1iygN4k1jhMQCBTU_7AMKWW7Y/edit?usp=drivesdk" },
        { "text": "Facilitation of Athelets", "pdfUrl": "https://docs.google.com/presentation/d/1IFmcoKmDr1UtiDEO_8SxowDRPI9hIEo9n9LPMQXxWWE/edit?usp=drivesdk" },
        { "text": "Cycling Expedition - Nasha Mukata Bharat", "pdfUrl": "https://docs.google.com/presentation/d/1We1IJRTDZ-XbiEWUA717Ju3kyhTjFn71hC2Li9AfA9U/edit?usp=drivesdk" }
      ]
    }
  ],
  "Aug": [
    {
      "id": 2,
      "month": "August",
      "image": august2425,
      "title": "Monthly Events",
      "details": [
        { "text": "Club Orientation Meeting", "pdfUrl": "https://docs.google.com/presentation/d/1NksB_SrQPe6m2wsTuP3s8U3SKXZz1amszEXILU1cnNg/edit?usp=drivesdk" },
        { "text": "42th Foundation Day Celebration - MAEERS group of Instituion", "pdfUrl": "https://docs.google.com/presentation/d/1dvtJQ9hjq3j3Ni8Vxm7rx1tAWsYqEvSJ9zqK_AYy6Mk/edit?usp=drivesdk" },
        { "text": "Empowering Sports Coordinators for a Fit and Sharp Student Community", "pdfUrl": "https://docs.google.com/presentation/d/1BENc8i-1aRQo-WQL1OPU-fsXgAjTgt18h4dZOXEXR6k/edit?usp=drivesdk" },
        { "text": "CLUB CATALYST", "pdfUrl": "https://docs.google.com/presentation/d/1lVl7YaF4ngQxEKQ0AIOp4kaNGG7E-wjrw-xOT-aqpBQ/edit?usp=drivesdk" },
        { "text": "SPECTRA 5.0", "pdfUrl": "https://docs.google.com/presentation/d/15AzlS0KSa2xin1qEHOVZ5ATUJMLMeuHmdBlOB6luvJI/edit?usp=drivesdk" },
        { "text": "Pedal for Freedom:Cycle for Green and Drug-Free Tomorrow", "pdfUrl": "https://docs.google.com/presentation/d/1qtN88mYaMV7P9N3EDQXTSL81WVNKx0WL-NCAMHqwigU/edit?usp=drivesdk" },
        { "text": "Nurturing Communities: MIT ADT University's Commitment to Social Responsibility through the Induction Program Food Distribution", "pdfUrl": "https://docs.google.com/presentation/d/1dsz3lePzdwFn1tZbjIof4y9ns_u3IGD6TQhRwIGV1-w/edit?usp=drivesdk" }
      ]
    }
  ],
  "Sep": [
    {
      "id": 3,
      "month": "September",
      "image": september2425,
      "title": "Monthly Events",
      "details": [
        { "text": "IMPACT Student Council - Interview", "pdfUrl": "https://docs.google.com/presentation/d/1gbW25GvZoR0CEwnlVu09X8S2Lj3KbxfloHR52ISYWX0/edit?usp=drivesdk" },
        { "text": "Spectra 6.0", "pdfUrl": "https://docs.google.com/presentation/d/1CusKnoNJOtebltGv6UqsnC9Yxrdr51e52tQI9X4cl2I/edit?usp=drivesdk" },
        { "text": "Council Meeting", "pdfUrl": "https://docs.google.com/presentation/d/1kFT0KcyqA7Q9jycIrFAelACICvzjKEorHvvnlpjOnHk/edit?usp=drivesdk" },
        { "text": "Viksit Bharat", "pdfUrl": "https://docs.google.com/presentation/d/12b0NNdmBB7pvnhtUKKp14Zp8hpqrw6gLrMm8hffx7_A/edit?usp=drivesdk" },
        { "text": "Mega Blood Donation Camp", "pdfUrl": "https://docs.google.com/presentation/d/1LN4o9sfB0WdmlBz4PXg0lztI1Jj9RtztG0ILSHqzGc4/edit?usp=drivesdk" },
        { "text": "Tree Plantation Drive", "pdfUrl": "https://docs.google.com/presentation/d/1OzYvPSUrbwenHHWt2UokVelXXkP408tLcGoRIoZBEZA/edit?usp=drivesdk" }
      ]
    }
  ],
  "Oct": [
    {
      "id": 4,
      "month": "October",
      "image": october2425,
      "title": "Monthly Events",
      "details": [
        { "text": "Talent Fusion 2024", "pdfUrl": "https://docs.google.com/presentation/d/1eFymPhWte2omlbE7HFSPMVMhUO9FkozAcRFUOi-aD7s/edit?usp=drivesdk" },
        { "text": "Psycogn", "pdfUrl": "https://docs.google.com/presentation/d/1EsZKV_nitHYuY2HrKdp7yuC8hjfDpFK3vT33b6IPTIw/edit?usp=drivesdk" },
        { "text": "Team Bonding Session", "pdfUrl": "https://docs.google.com/presentation/d/1PNWUBxJ-pVWdOeNxVg3rplc5DZarvO-IA4pFqTa9Y-g/edit?usp=drivesdk" },
        { "text": "Halloween Screening and Cosplay Event", "pdfUrl": "https://docs.google.com/presentation/d/1utXGS1bGV1yuD8JCDxTYSy0aD0l3VYFBiFixalBgLPE/edit?usp=drivesdk" },
        { "text": "Cleanliness Drive", "pdfUrl": "https://docs.google.com/presentation/d/160ogWVDlmD93Ids_Fk6laSIK51jyBxse8m-0VhZowBo/edit?usp=drivesdk" },
        { "text": "Ek Ped Maa Ke Naam", "pdfUrl": "https://docs.google.com/presentation/d/1H_ocsPIQq9uL-O636A7u8pdZ18JAiSw_0k2byVnMDfU/edit?usp=drivesdk" },
        { "text": "MIT ADT Dandiya Nights", "pdfUrl": "https://docs.google.com/presentation/d/1-16Iy3fHn4lyQnKCQaXHNmXzBczYOmbSX73cozxD5nE/edit?usp=drivesdk" },
        { "text": "MIT ADT Dandiya Nights", "pdfUrl": "https://docs.google.com/presentation/d/1OTBl7rwYQgoeWRC2qB0atNvZm0pP1jcLky30fvWVFsQ/edit?usp=drivesdk" },
        { "text": "Art Therapy Workshop", "pdfUrl": "https://docs.google.com/presentation/d/15GZQLqYK6zBvB4gbuf2wjjfXWnCv8t4M3W1sOe0VzUk/edit?usp=drivesdk" },
        { "text": "Council Meeting", "pdfUrl": "https://docs.google.com/presentation/d/1wM1GX9vqWBqJGsA9G_pjwRw828tgCt0sisbAQrchLJk/edit?usp=drivesdk" },
        { "text": "Council Shoot", "pdfUrl": "https://docs.google.com/presentation/d/1trPwnjjWZgn_B3iZkoy5zb-HnPN_tRJHRWy8_gmY0Z8/edit?usp=drivesdk" },
        { "text": "38th West Zone Youth Festival Auditions", "pdfUrl": "https://docs.google.com/presentation/d/1qIpetzll1amg8a4G3rY6X_vkPck894ZFwGbwSGWI0uw/edit?usp=drivesdk" },
        { "text": "Deepostav", "pdfUrl": "https://docs.google.com/presentation/d/1vjH3nk0sxH72anarciP6NCpJ2Sx-AGB66W2LaZ2NViw/edit?usp=drivesdk" },
        { "text": "Diya Painting Competition", "pdfUrl": "https://docs.google.com/presentation/d/1sghoLHgs4aH2el6QBBH4iKhfFoGK9jMjWmXNaYDGM-o/edit?usp=drivesdk" },
        { "text": "Rangoli Making Competition", "pdfUrl": "https://docs.google.com/presentation/d/1MsqyrovMmJDzZFafyYHOQboshlcmlI0KtwDCLVvXX9o/edit?usp=drivesdk" },
        { "text": "ADT Master Chef Competition", "pdfUrl": "https://docs.google.com/presentation/d/1ggsILE1hL1eu5j5Mk-x25YDPggE4792gYy4l1XL6mac/edit?usp=drivesdk" },
        { "text": "Session on Intellectual Property", "pdfUrl": "https://docs.google.com/presentation/d/1F7Cw4MSaeWhaZX_fl4kiq0b72iMautJGCEEfteVJy-o/edit?usp=drivesdk" },
        { "text": "Council Meet and Breakfast", "pdfUrl": "https://docs.google.com/presentation/d/1CDTYEx74LuSwVyY9bknqGjNAdwYeoE8D29lmO5uYAPw/edit?usp=drivesdk" },
        { "text": "Khande Navami Pooja", "pdfUrl": "https://docs.google.com/presentation/d/1RCXPPLcfG-sP3qDkWC0HII1KOwsVWAT6w_V-swK4eS4/edit?usp=drivesdk" },
        { "text": "Council Meeting", "pdfUrl": "https://docs.google.com/presentation/d/1FQVegw1tnqEyf6CMluRFPanmbuLUIVbUw8nnrva0gpE/edit?usp=drivesdk" },
        { "text": "Diwali Wishes Shoot", "pdfUrl": "https://docs.google.com/presentation/d/1s730K2jxY-qPLaVbJ2yiRrAmgFEvJRo1KfsH6-rLOeE/edit?usp=drivesdk" },
        { "text": "Diya Painting", "pdfUrl": "https://docs.google.com/presentation/d/1qpaJuDIYmokUJ9YIrv_ejQOQxN6YZqN8kFKVJ5hN0_4/edit?usp=drivesdk" }
      ]
    }
  ],
  "Nov": [
    {
      "id": 5,
      "month": "November",
      "image": november2425,
      "title": "Monthly Events",
      "details": [
        { "text": "Spectra 8.0", "pdfUrl": "https://docs.google.com/presentation/d/1k_HgJUIV6NA2TdXEgwejiWMM0dz_yMsIQtMg2aYuNK0/edit?usp=drivesdk" },
        { "text": "Debate Competition", "pdfUrl": "https://docs.google.com/presentation/d/1kJzEsLslMFWIcrF4dmdTiLncXtwG6261n1FDXI7cY2U/edit?usp=drivesdk" },
        { "text": "Voting Awareness Drive", "pdfUrl": "https://docs.google.com/presentation/d/1ZMKFTL1sJcgDJuaMPfosH0x8gzGc_bF9QRoHISUnrno/edit?usp=drivesdk" },
        { "text": "Election Day Awareness Campaign", "pdfUrl": "https://docs.google.com/presentation/d/1nhuUHrpE4OUPBaZA8v8_6FZexnxqPfOP07rAdmufFs4/edit?usp=drivesdk" },
        { "text": "Youth Festival Meeting", "pdfUrl": "https://docs.google.com/presentation/d/1PMoSgzqyszmA88aBGQglBNMLAGtVaH3MKNOsZU4NZe4/edit?usp=drivesdk" },
        { "text": "Vishwanath Sports Meet Discussion", "pdfUrl": "https://docs.google.com/presentation/d/1Y38QOybMz3tT9M1kJi3bIsWc1DvGOIB8Rg3U_zW7OHg/edit?usp=drivesdk" },
        { "text": "Nasha Mukt Abhiyan", "pdfUrl": "https://docs.google.com/presentation/d/1UC-Byg1IkfiaSodi_HP6qDM5xN_JGtp3f_SsYdA9UZE/edit?usp=drivesdk" },
        { "text": "Blood Donation Camp", "pdfUrl": "https://docs.google.com/presentation/d/1L0Fsy7lDS-I1ra-MwlL_8UctfDFL__2unAY6AuOtIII/edit?usp=drivesdk" }
      ]
    }
  ],
  "Dec": [
    {
      "id": 6,
      "month": "December",
      "image": december2425,
      "title": "Monthly Events",
      "details": [
        { "text": "Unlock Java", "pdfUrl": "https://docs.google.com/presentation/d/1A26t7637U4rreqMo2vpCp-bqqJxgEEFeyomwOIc2gtk/edit?usp=drivesdk" },
        { "text": "Python Odyssey", "pdfUrl": "https://docs.google.com/presentation/d/16k8nydsEFPDTY5sZbL_uVcNTDMsjm80lltg8CH2gmWU/edit?usp=drivesdk" },
        { "text": "Teacher's Day", "pdfUrl": "https://docs.google.com/presentation/d/1ptIiJFdeBID6f73wYNH9hyT1IsSg4FnSDUGhC4ZsMnM/edit?usp=drivesdk" },
        { "text": "Vision Voyage", "pdfUrl": "https://docs.google.com/presentation/d/1URuZ7BK9Jmjt6fgXHUvSHc4xi2ptnmSUEJ-zQSplkyo/edit?usp=drivesdk" },
        { "text": "Official Handover", "pdfUrl": "https://docs.google.com/presentation/d/1dIdXDzYXZY9VuPNkB2ldhaxrS4HkIiCT1TVnhH539mM/edit?usp=drivesdk" },
        { "text": "Dil Chahta Hai", "pdfUrl": "https://docs.google.com/presentation/d/1oaS4RWxfTX1RBUqSXAf2ptoMOIAXPjAhuagDbBP6b9g/edit?usp=drivesdk" },
        { "text": "Reality Shifthttps", "pdfUrl": "https://docs.google.com/presentation/d/14aipdV7DF2k-DNSCXtxfJ7ZWEGkbGyjLsOIGJVOOLaE/edit?usp=drivesdk" },
        { "text": "Onam Celebration", "pdfUrl": "https://docs.google.com/presentation/d/1_3Gdxxyu1p8L_A4pqd1Qr4do96a9b4e2zlISP6vZOSU/edit?usp=drivesdk" },
        { "text": "Spectra 9.0: The Final Showdown of 38th West Zone Youth Festival", "pdfUrl": "https://docs.google.com/presentation/d/1S_HjdfFrKgd1_GpCKr8bP7GQ7IsvSoGn2QTk5WLhO_8/edit?usp=drivesdk" },
        { "text": "Preparatory Meeting for 38th West Zone Youth Festival", "pdfUrl": "https://docs.google.com/presentation/d/1Fgct2eGMNgjBIjaiXi32wrX19O5uEIjfN4RETcCjOWs/edit?usp=drivesdk" },
        { "text": "FIT India Cycling Campaign", "pdfUrl": "https://docs.google.com/presentation/d/1d-nCWYsXuyaqar0HGz_DyWsmFa4vRwbr3JBI33EooKk/edit?usp=drivesdk" },
        { "text": "Fit India Cycling Initiative", "pdfUrl": "https://docs.google.com/presentation/d/1exayMcISmZjaJ5yChGVYGPn71Rx5Suz2ZviGN0NAxfU/edit?usp=drivesdk" }
      ]
    }
  ],
  "Jan": [
    {
      "id": 7,
      "month": "January",
      "image": january2425,
      "title": "Monthly Events",
      "details": [
        { "text": "National Youth Day Celebration", "pdfUrl": "https://docs.google.com/presentation/d/1fvXqbxhgeBW_GyEecSIMzxDVOFmI_GDwpd-9L9vmVDY/edit?usp=drivesdk" },
        { "text": "Cycle Rally", "pdfUrl": "https://docs.google.com/presentation/d/1n7T2ELv2dgxHWiMGRW8hSSffFvUWpgQ77LGqan-tsis/edit?usp=drivesdk" },
        { "text": "Interactive Session with Hostel and Mess Representatives", "pdfUrl": "https://docs.google.com/presentation/d/1I4VKVLTjLvEeqzi_IZOT7l7Yi8Opy11GfZWNDnIPw18/edit?usp=drivesdk" },
        { "text": "38th AIU Inter University Youth Festival", "pdfUrl": "https://docs.google.com/presentation/d/10LtH5MXR5krmWCGiA_tUhmumEurKrCgeOLFUBTB0qiA/edit?usp=drivesdk" },
        { "text": "Confluence 2025", "pdfUrl": "https://docs.google.com/presentation/d/142ClEFOvzCN9xgHVCj6LtvtarMZldtKylvpVNXM5z7I/edit?usp=drivesdk" },
        { "text": "National Youth Day Celebration", "pdfUrl": "https://docs.google.com/presentation/d/12P3bEZ3S_VBFSnsfqZH0pKNykTuBF27HIGF7r7D_EK8/edit?usp=drivesdk" },
        { "text": "FIT India Cycling Rally", "pdfUrl": "https://docs.google.com/presentation/d/1EooTIRZdQaDfCY82lWQASkG6rjhxCWRADs_MOAMkE-Y/edit?usp=drivesdk" }
      ]
    }
  ],
  "Feb": [
    {
      "id": 8,
      "month": "February",
      "image": february2425,
      "title": "Monthly Events",
      "details": [
        { "text": "Spectra 11.0", "pdfUrl": "https://docs.google.com/presentation/d/1kRORPOQj-_zqFjk6sALkhKHAsKE2vWsZlSrCiae6DdU/edit?usp=drivesdk" },
        { "text": "Hindavi Swarajya Killa Spardha", "pdfUrl": "https://docs.google.com/presentation/d/1_HRHzdfzKZyGfCOqcNqsJNZH7K6PA4bEvrbjewHgKzo/edit?usp=drivesdk" },
        { "text": "Shiv Jayanti Celebration", "pdfUrl": "https://docs.google.com/presentation/d/1OdzcloRV2XX3xEy4LYpZ5otqxNU3MKs_RzTzPRqqTlE/edit?usp=drivesdk" }
      ]
    }
  ],
  "Mar": [
    {
      "id": 9,
      "month": "March",
      "image": march2425,
      "title": "Monthly Events",
      "details": [
        { "text": "Preparatory Meeting for Persona 2025", "pdfUrl": "https://docs.google.com/presentation/d/1GvFvAGxhPLiRsMQBKgku_rFM-NUtV-WV2kitGdVoIh0/edit?usp=drivesdk" },
        { "text": "Persona Planning Meet", "pdfUrl": "https://docs.google.com/presentation/d/1cpMBCGq19yfnZQtXRWbuer44xYuOWsB0Rc6SIQift-Y/edit?usp=drivesdk" },
        { "text": "Vikisit Bharat", "pdfUrl": "https://docs.google.com/presentation/d/1mnVwNB-1-DHNVRDqSbpP2-Fft6_PZslLsko70ed_ats/edit?usp=drivesdk" }
      ]
    }
  ]
    },
    '2025-26': {
      'May': [
        {
          id: 9,
          month: 'May',
          image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=300&h=300&fit=crop',
          title: 'Upcoming Youth Event 2026',
          details: [
            { text: 'Planned Youth Celebration', pdfUrl: 'https://www.example.com/planned-youth-2026.pdf' },
            { text: 'Future Dance Rally', pdfUrl: 'https://www.example.com/future-dance-2026.pdf' },
            { text: 'Upcoming Interactive Sessions', pdfUrl: 'https://www.example.com/upcoming-sessions-2026.pdf' },
            { text: 'Future Festival Planning', pdfUrl: 'https://www.example.com/future-planning-2026.pdf' }
          ]
        }
      ]
    }
  };

  // Get all months that have events in the current year
  const allMonthsInYear = Object.keys(timelineData[selectedYear] || {});
  
  // Get all events for the current year (all months)
  const allCurrentEvents = allMonthsInYear.reduce((acc, month) => {
    return acc.concat(timelineData[selectedYear][month] || []);
  }, []);

  const months = allMonthsInYear;

  // Function to navigate years
  const navigateYear = (direction) => {
    if (direction === 'prev' && currentYearIndex > 0) {
      const newYear = academicYears[currentYearIndex - 1];
      setSelectedYear(newYear);
      // Set to first available month in new year
      const availableMonths = Object.keys(timelineData[newYear] || {});
      if (availableMonths.length > 0) {
        setSelectedMonth(availableMonths[0]);
      }
    } else if (direction === 'next' && currentYearIndex < academicYears.length - 1) {
      const newYear = academicYears[currentYearIndex + 1];
      setSelectedYear(newYear);
      // Set to first available month in new year
      const availableMonths = Object.keys(timelineData[newYear] || {});
      if (availableMonths.length > 0) {
        setSelectedMonth(availableMonths[0]);
      }
    }
  };

  // Function to scroll to specific milestone
  const scrollToMilestone = (month) => {
    // Don't change the selected month filter, just scroll
    const events = timelineData[selectedYear]?.[month];
    if (events && events.length > 0) {
      const element = document.getElementById(`milestone-${events[0].id}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    document.querySelectorAll('.milestone-content').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [allCurrentEvents]);

  return (
    <div className="w-full min-h-screen bg-gray-50">


      {/* Header Controls */}
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Past Events Timeline</h1>
        
        {/* Year Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button 
            onClick={() => navigateYear('prev')}
            disabled={currentYearIndex === 0}
            className={`p-3 rounded-full transition-colors ${
              currentYearIndex === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-[#9b28b1] text-white '
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <span className="text-lg font-semibold text-gray-700 px-4">
            Academic year: {selectedYear}
          </span>
          <button 
            onClick={() => navigateYear('next')}
            disabled={currentYearIndex === academicYears.length - 1}
            className={`p-3 rounded-full transition-colors ${
              currentYearIndex === academicYears.length - 1 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-[#9b28b1] text-white'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Month Buttons - Navigation to scroll to specific months */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {months.map((month, index) => (
            <button
              key={index}
              onClick={() => scrollToMilestone(month)}
              className="px-6 py-3 rounded-full font-medium transition-all text-base bg-[#e4abf0ff] text-[#9b28b1] hover:shadow-lg"
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline Container */}
      <div className="max-w-6xl mx-auto px-8 pb-16 relative">
        {allCurrentEvents.map((milestone, index) => (
          <div key={milestone.id} id={`milestone-${milestone.id}`} className="mb-16 relative flex flex-col items-center">
            {/* Month Label above image (instead of year) */}
            <button
              onClick={() => scrollToMilestone(milestone.month)}
              className="text-center text-3xl font-bold mb-6 px-6 py-2 z-10 bg-white rounded-full cursor-pointer hover:shadow-lg transition-shadow"
              style={{
                background: 'linear-gradient(to right, #9b28b1, #ff6f3c, #ffb020)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                marginTop: '32px'
              }}
            >
              {milestone.month}
            </button>
            
            {/* Timeline Segment */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#9b28b1] z-0"
              style={{
                height: 'calc(100% - 50px)',
                top: '130px'
              }}
            ></div>

            {/* Milestone Content */}
            <div 
              className={`milestone-content flex gap-8 items-center mx-8 opacity-0 w-full transition-all duration-700 ease-out ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              style={{
                transform: index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)'
              }}
            >
              {/* Image Container */}
              <div className="flex-shrink-0 relative">
                <div 
                  className="w-80 h-80 rounded-full overflow-hidden relative"
                  style={{
                    border: '12px solid #9b28b1',
                    aspectRatio: '1/1'
                  }}
                >
                  <div 
                    className="absolute -top-1.5 -left-1.5 -right-1.5 -bottom-1.5 border-12 border-white rounded-full pointer-events-none"
                    style={{
                      border: '12px solid white'
                    }}
                  ></div>
                  <img 
                    src={milestone.image} 
                    alt={`Milestone ${milestone.year}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Description Container */}
              <div className="flex-1 p-6 bg-blue-600 text-white rounded-lg shadow-lg" style={{background:"linear-gradient(220deg, #ff9100 0%, #9f008f 90%)"}}>
                <h3 className="text-xl font-bold mb-4">{milestone.title}</h3>
                <ul className="space-y-2">
                  {milestone.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-base">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3 flex-shrink-0 mt-2"></div>
                      <a 
                        href={detail.pdfUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-300 hover:underline cursor-pointer transition-colors leading-relaxed"
                      >
                        {detail.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No events message */}
      {allCurrentEvents.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-xl">No events found for {selectedYear}</p>
        </div>
      )}

      <style jsx>{`
        .milestone-content.visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
        
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideIn2 {
          from {
            transform: translateX(200%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .milestone-content {
            flex-direction: column !important;
            gap: 1rem;
          }
          
          .milestone-content > div:first-child {
            width: 200px;
            height: 200px;
            min-width: 200px;
            min-height: 200px;
          }
          
          .milestone-content > div:first-child > div {
            width: 200px !important;
            height: 200px !important;
          }
        }

        @media (max-width: 480px) {
          .milestone-content > div:first-child {
            width: 180px;
            height: 180px;
            min-width: 180px;
            min-height: 180px;
          }
          
          .milestone-content > div:first-child > div {
            width: 180px !important;
            height: 180px !important;
          }
          
          .milestone-content > div:last-child p:first-child {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}