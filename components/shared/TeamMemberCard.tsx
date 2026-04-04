import { ExternalLink } from 'lucide-react';
import type { TeamMember } from '@/data/team';

interface TeamMemberCardProps {
  member: TeamMember;
}

function getInitials(name: string) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-black-soft border border-[#2A2A2A] rounded-lg p-6 hover:border-yellow transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,197,24,0.2)] text-center group">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-yellow flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(245,197,24,0.4)] transition-all duration-300">
        <span className="font-syne font-extrabold text-black text-xl">
          {getInitials(member.name)}
        </span>
      </div>
      <h3 className="font-syne font-bold text-white text-lg mb-1">{member.name}</h3>
      <p className="text-yellow text-sm font-syne font-semibold mb-3">{member.role}</p>
      <p className="text-white-muted text-sm mb-4">{member.bio}</p>
      {member.linkedin && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-white-muted hover:text-yellow transition-colors duration-200 text-sm"
        >
          <ExternalLink className="w-4 h-4" />
          LinkedIn
        </a>
      )}
    </div>
  );
}
