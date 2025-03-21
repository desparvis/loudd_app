from sqlalchemy import Column, ForeignKey, DateTime, func
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from config import Base 
import uuid

class Like(Base):
    __tablename__ = 'likes'

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    fan_id = Column(UUID(as_uuid=True), ForeignKey('fans.id'), nullable=False)
    song_id = Column(UUID(as_uuid=True), ForeignKey('songs.id'), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    fan = relationship("Fan", back_populates="likes")
    song = relationship("Song", back_populates="likes")