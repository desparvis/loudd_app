from sqlalchemy import Column, String, JSON, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.postgresql import UUID
from datetime import datetime
import uuid
from config import Base 

class Artist(Base):
    __tablename__ = 'artists'

    id = Column(UUID(as_uuid=True), ForeignKey('users.id'), primary_key=True)
    stage_name = Column(String, nullable=False)
    genre = Column(String, nullable=False)
    bio = Column(String, nullable=True)
    profile_picture = Column(String, nullable=True)
    social_links = Column(JSON, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    user = relationship("User", back_populates="artist")