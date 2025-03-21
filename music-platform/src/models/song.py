from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.dialects.postgresql import UUID
from config import Base
from datetime import datetime
import uuid

class Song(Base):
    __tablename__ = 'songs'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    artist_id = Column(UUID(as_uuid=True), ForeignKey('artists.id'), nullable=False)
    title = Column(String, nullable=False)
    genre = Column(String, nullable=False)
    file_url = Column(String, nullable=False)
    cover_image = Column(String)
    release_date = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)