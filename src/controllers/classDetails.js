export const getClassDetails = async (req, res) => {
    const data = [
        {
            "name": "SCRUM MASTER COMPASS",
            "description": "ตอนผู้สอนทั้ง 2 มาเป็น ScrumMaster ใหม่ ๆ เราพบช่วงเวลายากลำบากหลายครั้ง เราเคยสับสนว่า ScrumMaster ควรทำมากแค่ไหนจึงจะเพียงพอ หรือแค่ไหนที่เรียกว่าทำมากไปจนเป็นการริดรอนโอกาสเติบโตของทีม บางครั้งเราก็รู้สึกท้อแท้ เพราะปัญหาที่ทีมเผชิญมันหนักมากจนเราไม่รู้ว่าจะช่วยพวกเขาอย่างไร บางครั้งเราก็มองไม่เห็นว่าเราจะพาทีมที่เราดูแลไปไกลกว่านี้ได้อย่างไร ทำให้เราต้องหาหนังสือมาอ่าน ไปเรียน ไปแลกเปลี่ยนกับ ScumMaster ท่านอื่น จนก้าวผ่านช่วงเวลาเหล่านั้นมาได้ คอร์สนี้เราสองคนช่วยกันรวบรวมประสบการณ์ที่เราผ่านมาเพื่อมาแบ่งปันกับผู้เรียน ด้วยความหวังว่าจะช่วยให้มุมมองใหม่ ๆ ให้กำลังใจกับผู้ที่เป็น ScrumMaster, โค้ช หรือผู้นำท่านอื่น ๆ ที่สนใจ",
            "place": "Geeky Base All Star",
            "google_map_url": "https://maps.app.goo.gl/UQKuNzejJNNwVB2K9",
            "start_date": "31 มีนาคม 2024",
            "end_date": "31 มีนาคม 2024",
            "start_time": "9:00",
            "end_time": "17:00",
            "category": ["QA", "DEV", "BA", "BU"],
            "prerequisite": ["นอนหลับอย่างน้อย 8 ชั่วโมง", "ดื่มน้ำให้เพียงพอ"],
            "instructor": [
            {
                "name": "คุณจั๊วะ",
                "experience": "พัฒนา Software มามากกว่า 10 ปี"
            },
            {
                "name": "Instructor Name 2",
                "experience": "Instructor Experience 2"
            }
            ],
            "class_goal": "เพื่อให้ผู้เรียนสามารถนำ scrum ไปปรับใช้ใยนการทำงานได้",
            "max_participants": 30,
            "price_per_person_baht": 4000.00
            }
    ];
    res.json({ data });
  };
  