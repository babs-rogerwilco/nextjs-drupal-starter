export interface ToolAction {
  id: string;
  label: string;
  href: string;
  icon: string;
}

export const TOOL_ACTIONS: ToolAction[] = [
  { id: 'quote', label: 'GET A QUOTE', href: '/get-a-quote', icon: '✏️' },
  { id: 'test-drive', label: 'BOOK A TEST DRIVE', href: '/book-a-test-drive', icon: '🚘' },
  { id: 'dealer', label: 'FIND A DEALER', href: '/locate-a-dealer', icon: '📍' },
  { id: 'service', label: 'BOOK A SERVICE', href: '/book-a-service', icon: '🛠️' },
];
