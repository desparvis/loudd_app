from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from config import Base
from datetime import datetime
import uuid

class Playlist(Base):
    __tablename__ = 'playlists'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    fan_id = Column(UUID(as_uuid=True), ForeignKey('fans.id'), nullable=False)
    name = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)