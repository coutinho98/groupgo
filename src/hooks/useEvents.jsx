import { useEffect, useMemo } from "react";

const useEvents = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            const matchEvents = [
                {
                    id: 1,
                    titulo: 'Churrasco na Casa de Britola',
                    data: '12/03/2025',
                    horario: '15:00 - 22:00',
                    local: 'Casa de Brito',
                    participantes: 10,
                    itens: 3,
                    total: 500.00,
                    status: 'pendente'
                },
                {
                    id: 2,
                    titulo: 'RPG na casa de Brunão',
                    data: '20/03/2025',
                    horario: '13:00 - 22:00',
                    local: 'Casa de Brunão',
                    participantes: 5,
                    itens: 3,
                    total: 100.00,
                    status: 'confirmado'
                },
            ];
            setEvents(matchEvents);
        };
        fetchEvents();
    }, []);

    const filteredEvents = useMemo(() =>
        events.filter(event =>
            event.title.toLowerCase().includes(searchTerm.toLowerCase()),
        ), [events, searchTerm]);

    const addEvents = (newEvent) => {
        setEvents(prev => [...prev, { ...newEvent, id: Date.now() }]);
    }

    return { events: filteredEvents, searchTerm, setSearchTerm, addEvents };
} 
